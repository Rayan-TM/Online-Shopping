import apiSlice from "./apiSlice";

export const managersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllManagers: builder.query({
      query: () => "/managers",
    }),
  }),
});

export const { useGetAllManagersQuery } = managersApi;
