import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APIBASEURL;

export const apiSlice = createApi({
  reducerPath: "myWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  endpoints: (builder) => ({
    // start contact
    contact: builder.mutation({
      query: (name, email, phone, message) => ({
        url: `/users/contact-me`,
        method: "PUT",
        body: name,
        email,
        phone,
        message,
      }),
    }),
    // end contact
  }),
});

export const { useContactMutation } = apiSlice;