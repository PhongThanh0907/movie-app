import { favoriteEndpoints } from "../../constant/option";
import privateClient from "../client/private.client";

const favoriteApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(favoriteEndpoints.LIST);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    mediaRate,
  }: {
    mediaId: string;
    mediaType: string;
    mediaTitle: string;
    mediaPoster: string;
    mediaRate: string;
  }) => {
    try {
      const response = await privateClient.post(favoriteEndpoints.ADD, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        mediaRate,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  remove: async ({ favoriteId }: { favoriteId: string }) => {
    try {
      const response = await privateClient.delete(
        favoriteEndpoints.REMOVE({ favoriteId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default favoriteApi;
