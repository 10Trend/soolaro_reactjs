import { axios } from "../axios";

export interface SuggestionPayload {
  city?: string;

  name?: string;

  email?: string;
  phone?: string;
  phone_country?: string;

  type?: string;
  title?: string;

  message: string;
}

export interface SuggestionResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export const postSuggestion = async (
  payload: SuggestionPayload
): Promise<SuggestionResponse> => {

  const { data } = await axios.post<SuggestionResponse>(
    "/suggestions",
    payload
  );

  return data;
};
