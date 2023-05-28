import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
