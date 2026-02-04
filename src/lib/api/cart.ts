import { axios, getToken } from "../axios";
import type { LocalizedText, Image } from "./products/products";

// ============ CART TYPES ============

export interface CartVariantAttribute {
  id: number;
  attribute: {
    id: number;
    name: LocalizedText;
    type: string;
  };
  value: {
    id: number;
    value: LocalizedText;
    special_value?: string | null;
  };
}

export interface CartVariant {
  id: number;
  price: number;
  final_price: number;
  has_discount: boolean;
  stock?: number;
  is_stock?: boolean;
  attributes: CartVariantAttribute[];
}

export interface CartItem {
  id: number;
  itemable_id: number;
  itemable_type: string;
  name: LocalizedText;
  image: Image;
  quantity: number;
  variant: CartVariant;
}

export interface CartCalculations {
  discount: number;
  total_discount?: number;
  subtotal: number;
  tax: number;
  delivery_fees: number;
  total: number;
}

export interface CartSession {
  session_id: number;
  new_session: boolean;
}

export interface Cart {
  session: CartSession;
  new_session: string;
  items: CartItem[];
  calculations: CartCalculations;
}

export interface CartState {
  cart: Cart | null;
  isLoading: boolean;
  error: string | null;
}

// ============ API REQUEST/RESPONSE TYPES ============

export interface CartRequest {
  session_id?: string;
  lat?: number;
  lng?: number;
  city_id?: string;
  area_id?: string;
}

export interface AddToCartRequest {
  session_id?: string;
  itemable_id: number;
  itemable_type: string;
  quantity: number;
  variant_id?: number;
  custom_data?: string;
  coupon_code?: string;
}

export interface RemoveFromCartRequest {
  session_id?: string;
  itemable_id: number;
  itemable_type: string;
}

export interface CartResponse {
  data?: Cart;
  items?: CartItem[];
  session?: CartSession;
  new_session?: string;
  calculations?: CartCalculations;
  message?: string;
}

// ============ SESSION MANAGEMENT ============

const SESSION_KEY = "soolaro_cart_session_id";
const COUPON_KEY = "soolaro_applied_coupon";

/** Check if user is authenticated */
const isUserAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!getToken();
};

/** Clear session ID (call when user logs in) */
export const clearCartSessionId = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
};

/** Generate or get session ID only for non-authenticated users */
export const getCartSessionId = (): string | undefined => {
  if (typeof window === "undefined") return undefined;

  // If user is authenticated, clear any existing session_id and don't use it
  if (isUserAuthenticated()) {
    clearCartSessionId();
    return undefined;
  }

  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
};

// ============ COUPON SESSION STORAGE ============

export const getCouponFromSession = (): string | null => {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(COUPON_KEY);
};

export const saveCouponToSession = (couponCode: string): void => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(COUPON_KEY, couponCode);
};

export const clearCouponFromSession = (): void => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(COUPON_KEY);
};

// ============ HELPER FUNCTIONS ============

/** Detect coupon-related errors from API response */
const isCouponError = (error: unknown): boolean => {
  const err = error as {
    response?: { status?: number; data?: { message?: string } };
  };
  if (err?.response?.status !== 422) return false;
  const errorMessage = err?.response?.data?.message || "";
  return (
    errorMessage.includes("الكوبون") ||
    errorMessage.toLowerCase().includes("coupon") ||
    errorMessage.includes("منتهي الصلاحية") ||
    errorMessage.includes("غير صالح")
  );
};

/** Normalize cart response to Cart type */
const normalizeCartResponse = (response: CartResponse): Cart => {
  // Handle both wrapped { data: Cart } and direct Cart response
  if (response.data) {
    return response.data;
  }

  return {
    items: Array.isArray(response.items) ? response.items : [],
    session: response.session || { session_id: 0, new_session: false },
    new_session: response.new_session || "",
    calculations: response.calculations || {
      discount: 0,
      subtotal: 0,
      tax: 0,
      delivery_fees: 0,
      total: 0,
    },
  };
};

// ============ CART API METHODS ============

export const cartApi = {
  /**
   * GET cart contents
   */
  getCart: async (
    params?: CartRequest & { coupon_code?: string },
  ): Promise<Cart> => {
    try {
      const requestParams: CartRequest & { coupon_code?: string } = {
        ...params,
      };
      const sessionId = getCartSessionId();
      const storedCoupon = getCouponFromSession();

      // Only add session_id if user is not authenticated
      if (sessionId && !isUserAuthenticated()) {
        requestParams.session_id = sessionId;
      }

      // Include stored coupon if exists
      if (storedCoupon && !requestParams.coupon_code) {
        requestParams.coupon_code = storedCoupon;
      }

      const response = await axios.get<CartResponse>("/cart", {
        params: requestParams,
      });
      return normalizeCartResponse(response.data);
    } catch (error: unknown) {
      // Handle expired/invalid coupon - clear and retry
      if (isCouponError(error)) {
        clearCouponFromSession();
        const retryParams: CartRequest = { ...params };
        const sessionId = getCartSessionId();
        if (sessionId && !isUserAuthenticated()) {
          retryParams.session_id = sessionId;
        }
        const retryResponse = await axios.get<CartResponse>("/cart", {
          params: retryParams,
        });
        return normalizeCartResponse(retryResponse.data);
      }
      throw error;
    }
  },

  /**
   * POST add item to cart
   */
  addToCart: async (
    data: Omit<AddToCartRequest, "session_id">,
  ): Promise<Cart> => {
    try {
      const requestData: AddToCartRequest = { ...data };
      const sessionId = getCartSessionId();
      const storedCoupon = getCouponFromSession();

      if (sessionId && !isUserAuthenticated()) {
        requestData.session_id = sessionId;
      }

      if (storedCoupon && !requestData.coupon_code) {
        requestData.coupon_code = storedCoupon;
      }

      const response = await axios.post<CartResponse>("/cart", requestData);
      return normalizeCartResponse(response.data);
    } catch (error: unknown) {
      // Handle expired coupon - retry without it
      if (isCouponError(error)) {
        clearCouponFromSession();
        const retryData: AddToCartRequest = { ...data };
        const sessionId = getCartSessionId();
        if (sessionId && !isUserAuthenticated()) {
          retryData.session_id = sessionId;
        }
        const retryResponse = await axios.post<CartResponse>(
          "/cart",
          retryData,
        );
        return normalizeCartResponse(retryResponse.data);
      }
      throw error;
    }
  },

  /**
   * DELETE remove item from cart
   */
  removeFromCart: async (
    id: number,
    data: Omit<RemoveFromCartRequest, "session_id"> & { coupon_code?: string },
  ): Promise<Cart> => {
    try {
      const requestParams: RemoveFromCartRequest & { coupon_code?: string } = {
        ...data,
      };
      const sessionId = getCartSessionId();
      const storedCoupon = getCouponFromSession();

      if (sessionId && !isUserAuthenticated()) {
        requestParams.session_id = sessionId;
      }

      if (storedCoupon && !requestParams.coupon_code) {
        requestParams.coupon_code = storedCoupon;
      }

      const response = await axios.delete<CartResponse>(`/cart/${id}`, {
        params: requestParams,
      });
      return normalizeCartResponse(response.data);
    } catch (error: unknown) {
      if (isCouponError(error)) {
        clearCouponFromSession();
        const retryParams: RemoveFromCartRequest = { ...data };
        const sessionId = getCartSessionId();
        if (sessionId && !isUserAuthenticated()) {
          retryParams.session_id = sessionId;
        }
        const retryResponse = await axios.delete<CartResponse>(`/cart/${id}`, {
          params: retryParams,
        });
        return normalizeCartResponse(retryResponse.data);
      }
      throw error;
    }
  },

  /**
   * Apply coupon (GET with coupon_code param)
   */
  applyCoupon: async (couponCode: string): Promise<Cart> => {
    const requestParams: CartRequest & { coupon_code?: string } = {};
    const sessionId = getCartSessionId();

    if (sessionId && !isUserAuthenticated()) {
      requestParams.session_id = sessionId;
    }

    if (couponCode.trim()) {
      requestParams.coupon_code = couponCode;
    }

    const response = await axios.get<CartResponse>("/cart", {
      params: requestParams,
    });

    // Store coupon in session if successful
    if (response.data && couponCode.trim()) {
      saveCouponToSession(couponCode.trim());
    }

    return normalizeCartResponse(response.data);
  },

  /**
   * Clear coupon from session and cart
   */
  clearCoupon: async (): Promise<Cart> => {
    clearCouponFromSession();

    const requestParams: CartRequest = {};
    const sessionId = getCartSessionId();

    if (sessionId && !isUserAuthenticated()) {
      requestParams.session_id = sessionId;
    }

    const response = await axios.get<CartResponse>("/cart", {
      params: requestParams,
    });
    return normalizeCartResponse(response.data);
  },
};
