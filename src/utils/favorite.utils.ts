import { Favorite } from "../types/favorite.type";

const favoriteUtils = {
  check: ({
    listFavorites,
    mediaId,
  }: {
    listFavorites: Favorite[];
    mediaId: string;
  }) =>
    listFavorites &&
    listFavorites.find((e) => e.mediaId.toString() === mediaId.toString()) !==
      undefined,
};

export default favoriteUtils;
