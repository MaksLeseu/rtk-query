import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api',
    }),
    endpoints: builder => {
        return {
            getUsers: builder.query<UsersType, void>({
                query: () => `/users`,
            }),
            getUser: builder.query<any, void>({
                query: () => '/users/10'
            })
        }
    },
})

export const { useGetUsersQuery, useGetUserQuery } = baseApi

type UsersType = {
    "page": number
    "per_page": number
    "total": number
    "total_pages": number
    "data": UsersDataType[]
}

type UsersDataType = {
    "id": number
    "email": string
    "first_name": string
    "last_name": string
    "avatar": string
}