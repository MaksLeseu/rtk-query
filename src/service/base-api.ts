import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {baseQueryWithReauth} from "./base-query-with-reauth";

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
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ['Me']
})