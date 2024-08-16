import apiSlice from "./apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: (isProduct) => `/category/${isProduct}`,
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
