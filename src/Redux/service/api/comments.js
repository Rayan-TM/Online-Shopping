import apiSlice from "./apiSlice";

export const commentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllContentComments: builder.query({
      query: ([isProduct, contentID]) => `/comments/${isProduct}/${contentID}`,
    }),
    sendComment: builder.mutation({
      query: (newComment) => ({
        url: `/comments`,
        method: "POST",
        body: newComment,
      }),
    }),
  }),
});

export const { useGetAllContentCommentsQuery, useSendCommentMutation } = commentsApi;
