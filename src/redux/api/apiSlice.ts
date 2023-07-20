import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBook, IBookPostData } from '../../types/book';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-5-server-iota.vercel.app/api/v1' }),
    tagTypes: ["getBook","getSingleBook"],
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/all-book"
        }),
        getBooks: builder.query({
            query: () => "/get-book",
            providesTags: ["getBook"]
        }),
        postBook: builder.mutation({
            query: (data: IBookPostData) => ({
                url: "/create-book",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["getBook"]
        }),
        deleteBook: builder.mutation({
            query: (data) => ({
                url: "/delete-book",
                method: "POST",
                body: data as { id: string, email: string }
            }),
            invalidatesTags: ["getBook"]
        }),
        updateBook: builder.mutation({
            query: ({ id, data }: { id: string, data: Partial<IBook> }) => ({
                url: `/update-book/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["getSingleBook"]
        }),
        getSingleBook: builder.query({
            query: (id: string) => `/get-book/${id}`,
            providesTags:["getSingleBook"]
            
        })
    })
});


export const {
    useGetAllBooksQuery,
    usePostBookMutation,
    useGetBooksQuery,
    useGetSingleBookQuery,
    useDeleteBookMutation,
    useUpdateBookMutation
} = api;