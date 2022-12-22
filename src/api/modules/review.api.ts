import { reviewEndpoints } from "../../constant/option";
import privateClient from "../client/private.client";

const reviewApi = {
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    content,
  }: {
    mediaId: string;
    mediaType: string;
    mediaTitle: string;
    mediaPoster: string;
    content: string;
  }) => {
    try {
      const response = await privateClient.post(reviewEndpoints.ADD, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  remove: async ({ reviewId }: { reviewId: string }) => {
    try {
      const response = await privateClient.delete(
        reviewEndpoints.REMOVE({ reviewId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getList: async () => {
    try {
      const response = await privateClient.get(reviewEndpoints.LIST);

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default reviewApi;
