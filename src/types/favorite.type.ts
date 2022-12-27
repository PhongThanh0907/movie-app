export interface Favorite {
  mediaId: string;
}

export interface User {
  username: string;
  displayName: string;
  password: string;
}

export interface ErrorType {
  error: {
    errors: string[];
    message: string;
  };
}
