import apiSlice from "./apiSlice";
import { createSelector } from "@reduxjs/toolkit";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getProductsOfPage: builder.query({
      query: ([page, limit, category, sort, search]) =>
        `/products/page/${page}/${limit}/${category}/${sort}/${search}`,
    }),
    getSearchedProducts: builder.query({
      query: (search) => `/products/search/${search}`,
    }),
  }),
});

const selectProductsResult = productsApi.endpoints.getAllProducts.select();

const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data ?? []
);

const selectProductByUrl = (productUrl) =>
  createSelector(selectProductsData, (products) =>
    products.find((product) => product.url === productUrl)
  );

export { selectProductByUrl, selectProductsData };

export const {
  useGetAllProductsQuery,
  useGetProductsOfPageQuery,
  useGetSearchedProductsQuery,
} = productsApi;
