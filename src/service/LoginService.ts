import { baseAPI } from ".";
import { ILogin } from "../models/ILogin";

export const loginService = baseAPI.injectEndpoints({
  endpoints: (buiilder) => ({
    loginMutation: buiilder.mutation<any, ILogin>({
      query: ({ name, email }) => ({
        url: "/signup",
        method: "POST",
        body: {
          name,
          email,
        },
      }),
    }),
  }),
});

export const { useLoginMutationMutation } = loginService;
