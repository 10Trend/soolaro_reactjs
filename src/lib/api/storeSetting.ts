import { axios } from "../axios";

export interface StoreSocial {
  url: string;
  snapchat: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  linkedin: string;
  youtube: string;
  twitter: string;
  whatsapp: string;
  phone: string;
  tax: number;
  slogan: string[];
  quick_slider: string[];
  email: string;
  subscription_pop_up_duration: number;
  area_id: number;
  city_id: number;
  country_id: number;
  details: string | null;
  location: unknown[];
  city_name: string | null;
  area_name: string | null;
  country_name: string | null;
}

export interface StoreSettingResponse {
  social: StoreSocial;
}

export const getStoreSetting = async (): Promise<StoreSettingResponse> => {
  const { data } = await axios.get<StoreSettingResponse>(
    "/store/setting"
  );

  return data;
};
