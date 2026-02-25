import { axios } from "@/lib/axios";

export interface OrderItem {
  id: number;
  order_id: number;
  product_name: { en: string; ar: string };
  price: number;
  quantity: number;
  subtotal: number;
  tax: number;
  total: number;
  productable?: {
    image?: {
      id: number;
      uuid: string;
      url: string;
      responsive_urls: string[];
    };
  };
}

export interface Order {
  id: number;
  code: string;
  tracking_number: string | null;
  status: string;
  delivered_at?: string;
  created_at: string;
  updated_at: string;
  delivery_expect: string;

  sub_total: number;
  shipping: number;
  tax: number;
  total: number;
  discount_amount: number;
  total_discount: number;
  products_discount: number;

  phone: string;
  phone_e164: string;
  phone_national: string;
  phone_country: string;
  phone_normalized: string;
  email: string;
  user_name: string;

  address_details: string | null;
  address_lat: string | null;
  address_lng: string | null;

  client: null | object;
  client_id: string;
  client_type: string;
  session_id: string;

  is_reviewed: boolean;
  reviews: unknown[];

  orderItems: OrderItem[];
}

interface OrderResponse {
  order: Order;
}

export const getOrderById = async (id: string | number): Promise<Order> => {
  const response = await axios.get<OrderResponse>(`/orders/id/${id}`);
  return response.data.order;
};