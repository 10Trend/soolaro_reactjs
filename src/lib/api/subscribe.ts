import { axios } from "../axios";

export interface SubscribePayload {
  email: string;
}

export interface SubscribeResponse {
  success: boolean;
  message: string;
}

export const subscribeToNewsletter = async (
  payload: SubscribePayload
): Promise<SubscribeResponse> => {
  try {
    const { data } = await axios.post<SubscribeResponse>(
      "https://dev.soolaro.ae/api/store/subscribe",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return data;
  } catch (error: any) {
    // Axios errors have response.data
    throw new Error(error.response?.data?.message || "Failed to subscribe");
  }
};
