import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/all-book"
        }),
        getBooks: builder.query({
            query: () => "/get-book"
        })
    })
});


export const { useGetAllBooksQuery,useGetBooksQuery } = api;