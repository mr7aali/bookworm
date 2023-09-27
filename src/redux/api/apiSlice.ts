import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBook, IBookPostData } from '../../types/book';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    tagTypes: ["getBook","getSingleBook","wishList&MakeReas"],
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/all-book"
        }),
        getBooks: builder.query({
            query: () => "/get-book",
            providesTags: ["getBook","wishList&MakeReas"]
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
            query: (data:{id:string,email:string}) => ({
                url: `/delete-book/${data.id}`,
                method: "DELETE",
                body: data.id
            }),
            invalidatesTags: ["getBook"]
        }),
        updateBook: builder.mutation({
            query: ({ id, data }: { id: string, data: Partial<IBook> }) => ({
                url: `/update-book/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["getSingleBook","wishList&MakeReas"]
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