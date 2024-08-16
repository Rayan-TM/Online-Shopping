import apiSlice from "./apiSlice";

export const commentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProductComments: builder.query({
      query: ([isProduct, contentID]) => `/comments/${isProduct}/${contentID}`,
    }),
  }),
});

export const { useGetAllProductCommentsQuery } = commentsApi;
