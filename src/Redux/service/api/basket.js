import apiSlice from "./apiSlice";

const basketSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBasketProducts: builder.query({
      query: (userID) => `/basket/${userID}`,
      providesTags: ["Basket"],
    }),
    addProductToBasket: builder.mutation({
      query: ([product, userID]) => ({
        url: `/basket/${userID}`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Basket"],
    }),
    decreaseProductCount: builder.mutation({
      query: ([userID, productID]) => ({
        url: `/basket/${userID}/${productID}/0/1`,
        method: "POST",
      }),
      invalidatesTags: ["Basket"],
    }),
    increaseProductCount: builder.mutation({
      query: ([userID, productID, count]) => ({
        url: `/basket/${userID}/${productID}/1/${count}`,
        method: "POST",
      }),
      invalidatesTags: ["Basket"],
    }),
    removeProductFromBasket: builder.mutation({
      query: ([userID, productID]) => ({
        url: `/basket/${userID}/${productID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Basket"],
    }),
  }),
});

export const {
  useGetBasketProductsQuery,
  useAddProductToBasketMutation,
  useDecreaseProductCountMutation,
  useIncreaseProductCountMutation,
  useRemoveProductFromBasketMutation,
} = basketSlice;
