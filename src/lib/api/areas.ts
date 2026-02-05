import { axios } from "../axios";

export interface AreaName {
  ar: string;
  en: string;
}

export interface Area {
  id: number;
  tenant_id: number | null;
  name: AreaName;
  city_id: number;
  created_at: string;
  updated_at: string;
}

export const getAreas = async (): Promise<Area[]> => {
  const { data } = await axios.get<Area[]>("/area");
  return data;
};

export const getAreasByCity = async (cityId: number): Promise<Area[]> => {
  const { data } = await axios.get<Area[]>("/area", {
    params: { city_id: cityId },
  });
  return data;
};
