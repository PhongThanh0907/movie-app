import { personEndpoints } from "../../constant/option";
import publicClient from "../client/public.client";

const personApi = {
  detail: async ({ personId }: { personId: string }) => {
    try {
      const response = await publicClient.get(
        personEndpoints.DETAIL({ personId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  medias: async ({ personId }: { personId: string }) => {
    try {
      const response = await publicClient.get(
        personEndpoints.MEDIAS({ personId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default personApi;
