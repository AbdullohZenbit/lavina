import { baseAPI } from ".";
import { IBook } from "../models/IBook";

export const bookService = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<any, IBook>({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: { ...data, isbn: "9781118464465" },
      }),
    }),
  }),
});

export const { useCreateBookMutation } = bookService;
