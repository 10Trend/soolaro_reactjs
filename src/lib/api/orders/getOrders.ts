import { axios } from "@/lib/axios";
import type { LocalizedText, Image } from "../products/products";

// ============ ORDER TYPES ============

export interface OrderVariantAttribute {
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

export interface OrderVariant {
  id: number;
  product_id: number;
  sku: string;
  barcode: string | null;
  price: number;
  discount: number | null;
  has_discount: boolean;
  discount_percentage?: number;
  final_price: number;
  is_out_of_stock: boolean;
  group_addons: any[];
  stock: number;
  is_stock: boolean;
  is_active: boolean;
  images: Image[];
  attributes: OrderVariantAttribute[];
}

export interface OrderItemProductable {
  id: number;
  tenant_id: string | null;
  product_id: number;
  sku: string;
  barcode: string | null;
  price: number;
  stock: number;
  is_stock: number;
  is_active: number;
  created_at: string;
  updated_at: string;
  discount: number | null;
  image: Image;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_name: LocalizedText;
  productable: OrderItemProductable;
  status: string;
  code: string;
  order_code: string;
  price: number;
  quantity: number;
  discount_amount: number;
  subtotal: number;
  tax: number;
  total: number;
  variant: OrderVariant;
  custom_data: any[];
  created_at: string;
  updated_at: string;
  is_reviewed: boolean;
}

export interface Order {
  id: number;
  code: string;
  tracking_number: string | null;
  status: string;
  client: any | null;
  user_name: string;
  email: string | null;
  client_id: string;
  client_type: string;
  session_id: string;
  phone: string;
  phone_country: string;
  phone_normalized: string;
  phone_national: string;
  phone_e164: string;
  address_details: string | null;
  address_lat: string | null;
  address_lng: string | null;
  delivery_expect: string | null;
  sub_total: number;
  discount_amount: number;
  products_discount: number;
  total_discount: number;
  tax: number;
  total: number;
  shipping: number;
  orderItems: OrderItem[];
  created_at: string;
  updated_at: string;
  is_reviewed: boolean;
}

export interface OrdersPagination {
  current_page: number;
  current_page_url: string;
  from: number;
  path: string;
  per_page: number;
  to: number;
}

export interface OrdersLinks {
  first: string;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface OrdersResponse {
  orders: {
    data: Order[];
    links: OrdersLinks;
    meta: OrdersPagination;
  };
}

export const getOrders = async (page: number = 1): Promise<OrdersResponse> => {
  const response = await axios.get(`/orders?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response.data;
};
