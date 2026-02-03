import { axios } from "@/lib/axios";

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  phone_e164?: string;
  password?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  phone: string | null;
  phone_e164: string | null;
  phone_country: string | null;
  phone_national: string | null;
  phone_normalized: string | null;
  phone_verified_at: string | null;
  birthday: string | null;
  blocked_until: string | null;
  city_id: number | null;
  country_id: number | null;
  created_at: string;
  created_by: string;
  deleted_at: string | null;
  gender: string | null;
  image: string | null;
  is_active: number;
  language: string;
  tenant_id: number | null;
  unread_notifications_count: number;
  updated_at: string;
}

export interface UpdateUserResponse {
  profile: string;
  user: User;
}

export const updateUser = async (
  payload: UpdateUserPayload
): Promise<UpdateUserResponse> => {
  const { data } = await axios.post<UpdateUserResponse>(
    "/user/update",
    payload
  );

  return data;
};
