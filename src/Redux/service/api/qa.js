import apiSlice from "./apiSlice";

export const qaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQa: builder.query({
      query: () => "/qa",
    }),
  }),
});

export const { useGetAllQaQuery } = qaApi;
