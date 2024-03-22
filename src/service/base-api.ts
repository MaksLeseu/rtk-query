import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api',
    }),
    endpoints: () => ({}),
})

export const baseAuthApi = createApi({
    reducerPath: 'baseAuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.flashcards.andrii.es/v1/auth',
        credentials: "include"
    }),
    endpoints: () => ({})
})