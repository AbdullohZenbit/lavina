import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {} from "crypto-js";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl,

  prepareHeaders: (headers, { getState }) => {
    if (baseUrl?.includes("/signup")) {
      let body = JSON.parse(pm.request.body);
      headers.set("Key", body.key);
      headers.set("secret", body.secret);
      console.log("updated key and secret: " + body.key + " " + body.secret);
    } else {
      let signstr =
       "POST" +
        "url" +
        JSON.stringify({"sa":"salom"}) +
        "MySecret";
        CryptoJS.
     let sign  = CryptoJS.MD5(signstr).toString();
      console.log("signstr: " + signstr);
      console.log("sign: " + sign);
      pm.collectionVariables.set("sign", sign);
    }
    const token = localStorage.getItem("access_token");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("key", "sanjar");
    headers.set("sign", "POST/books{isbn:9781118464465}sanjar");

    return headers;
  },
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
