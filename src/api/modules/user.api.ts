import privateClient from "../client/private.client";
import publicClient from "../client/public.client";
import { userEndpoints } from "../../constant/option";

const userApi = {
  signin: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const response = await publicClient.post(userEndpoints.SIGN_IN, {
        username,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({
    username,
    password,
    confirmPassword,
    displayName,
  }: {
    username: string;
    password: string;
    confirmPassword: string;
    displayName: string;
  }) => {
    try {
      const response = await publicClient.post(userEndpoints.SIGN_UP, {
        username,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.GET_INFO);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async ({
    password,
    newPassword,
    confirmNewPassword,
  }: {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    try {
      const response = await privateClient.put(userEndpoints.UPDATE_PASSWORD, {
        password,
        newPassword,
        confirmNewPassword,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
