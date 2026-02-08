import {axios} from "@/lib/axios";

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
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
