import {axios} from "@/lib/axios";

export interface Review {
  id: number;
  name: string;
  reviewable_id: number;
  reviewable_type: string;
  reviewer_type: "user" | "guest";
  reviewer_id?: number | null;
  guest_name?: string | null;
  guest_email?: string | null;
  rating: number;
  comment?: string | null;
  created_at: string;
  updated_at: string;
}

interface GetReviewableReviewsParams {
  reviewable_id: string;
  reviewable_type: "product" | string;
}

export const getReviewableReviews = async ({
  reviewable_id,
  reviewable_type,
}: GetReviewableReviewsParams): Promise<Review[]> => {
  const { data } = await axios.get("/review/reviewable", {
    params: {
      reviewable_id,
      reviewable_type,
    },
    headers: {
      Accept: "application/json",
    },
  });

  return data.data ?? data;
};
