import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api',
    }),
    endpoints: () => ({}),
})