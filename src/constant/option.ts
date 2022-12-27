export const userEndpoints = {
  SIGN_IN: "user/signin",
  SIGN_UP: "user/signup",
  GET_INFO: "user/info",
  UPDATE_PASSWORD: "user/update-password",
};

export const reviewEndpoints = {
  LIST: "reviews",
  ADD: "reviews",
  REMOVE: ({ reviewId }: { reviewId: string }) => `reviews/${reviewId}`,
};

export const personEndpoints = {
  DETAIL: ({ personId }: { personId: string }) => `person/${personId}`,
  MEDIAS: ({ personId }: { personId: string }) => `person/${personId}/medias`,
};

export const genreEndpoints = {
  LIST: ({ mediaType }: { mediaType: string }) => `${mediaType}/genres`,
};

export const favoriteEndpoints = {
  LIST: "user/favorites",
  ADD: "user/favorites",
  REMOVE: ({ favoriteId }: { favoriteId: string }) =>
    `user/favorites/${favoriteId}`,
};

export const mediaEndpoints = {
  LIST: ({
    mediaType,
    mediaCategory,
    page,
  }: {
    mediaType: string;
    mediaCategory: string;
    page: number;
  }) => `${mediaType}/${mediaCategory}?page=${page}`,
  DETAIL: ({ mediaType, mediaId }: { mediaType: string; mediaId: string }) =>
    `${mediaType}/detail/${mediaId}`,
  SEARCH: ({
    mediaType,
    query,
    page,
  }: {
    mediaType: string;
    query: string;
    page: number;
  }) => `${mediaType}/search?query=${query}&page=${page}`,
};

export const themeModes = {
  DARK: "dark",
  LIGHT: "light"
};

