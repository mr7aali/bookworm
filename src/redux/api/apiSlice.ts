import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBookPostData } from '../../types/book';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/all-book"
        }),
        getBooks: builder.query({
            query: () => "/get-book"
        }),
        postBook: builder.mutation({
            query: (data: IBookPostData) => ({
                url: "/create-book",
                method: "POST",
                body: data
            })
        }),
        getSingleBook: builder.query({
            query: (id:string) => `/get-book/${id}`
        })
    })
});


export const {
    useGetAllBooksQuery,
    usePostBookMutation,
    useGetBooksQuery,
    useGetSingleBookQuery
} = api;