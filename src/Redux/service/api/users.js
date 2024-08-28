import apiSlice from "./apiSlice";

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

    getUserInfoByToken: builder.query({
      query: (userToken) => `/users/${userToken}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetUserInfoQuery,
  useGetUserInfoByTokenQuery,
} = usersSlice;
