import apiSlice from "./apiSlice";
import { createSelector } from "@reduxjs/toolkit";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => "/blogs",
    }),
    getBlogsOfPage: builder.query({
      query: ([page, limit, category, search]) =>
        `/blogs/page/${page}/${limit}/${category}/${search}`,
    }),
  }),
});

const selectArticlesResult = articlesApi.endpoints.getAllArticles.select();

const selectArticlesData = createSelector(
  selectArticlesResult,
  (articlesResult) => articlesResult.data ?? []
);

const selectArticleByUrl = (articleUrl) =>
  createSelector(selectArticlesData, (articles) =>
    articles.find((article) => article.url === articleUrl)
  );

export { selectArticlesData, selectArticleByUrl };

export const { useGetAllArticlesQuery, useGetBlogsOfPageQuery } = articlesApi;
