import { genreEndpoints } from "../../constant/option";
import publicClient from "../client/public.client";



const genreApi = {
  getList: async ({ mediaType }: {mediaType: string}) => {
    try {
      const response = await publicClient.get(genreEndpoints.LIST({ mediaType }));

      return { response };
    } catch (err) { return { err }; }
  }
};

export default genreApi;