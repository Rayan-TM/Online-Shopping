import apiSlice from "./apiSlice";
import { createSelector } from "@reduxjs/toolkit";

const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    getUserInfo: builder.query({
      query: ([username, password]) => `/users/${username}/${password}`,
    }),

    getUserInfoBytoken: builder.query({
      query: (userToken) => `/users/${userToken}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetUserInfoQuery,
  useGetUserInfoBytokenQuery,
} = usersSlice;
