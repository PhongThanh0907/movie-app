import { mediaEndpoints } from "../../constant/option";
import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const mediaApi = {
  getList: async ({
    mediaType,
    mediaCategory,
    page,
  }: {
    mediaType: string;
    mediaCategory: string;
    page: number;
  }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.LIST({ mediaType, mediaCategory, page })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getDetail: async ({
    mediaType,
    mediaId,
  }: {
    mediaType: string;
    mediaId: string;
  }) => {
    try {
      const response = await privateClient.get(
        mediaEndpoints.DETAIL({ mediaType, mediaId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  search: async ({
    mediaType,
    query,
    page,
  }: {
    mediaType: string;
    query: string;
    page: number;
  }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.SEARCH({ mediaType, query, page })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default mediaApi;
