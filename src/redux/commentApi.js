import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://643968731b9a7dd5c966e1bd.mockapi.io';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({ query: () => API_ENDPOINT }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: comment,
    })})
  }),
});

export const {useGetCommentsQuery, useAddCommentMutation} = commentApi;