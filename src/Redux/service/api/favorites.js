import apiSlice from "./apiSlice";

const favoritesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFavoriteProducts: builder.query({
      query: (userID) => `/favorites/${userID}`,
      providesTags: ["Favorite"],
    }),
    addProductToFavorites: builder.mutation({
      query: ([userID, product]) => ({
        url: `/favorites/${userID}`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Favorite"],
    }),

    removeProductFromFavorites: builder.mutation({
      query: ([userID, productID]) => ({
        url: `/favorites/${userID}/${productID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorite"],
    }),
  }),
});

export const {
  useAddProductToFavoritesMutation,
  useGetFavoriteProductsQuery,
  useRemoveProductFromFavoritesMutation,
} = favoritesSlice;
