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
            getUser: builder.query<UserArgType, UserArgType | void>({
                query: (arg: UserArgType) => {
                    if (arg.id) {
                        return {
                            url: `/users/${arg?.id}`
                        }
                    }
                }
            }),
            createUser: builder.mutation<CreateUserArgsType | {}, CreateUserArgsType>({
                query: (args: CreateUserArgsType) => {
                    if (args.name) {
                        return {
                            url: `/users`,
                            method: 'POST',
                            body: args
                        }
                    }
                }
            })
        }
    },
})

export const { useGetUsersQuery, useGetUserQuery, useCreateUserMutation } = baseApi

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

type UserArgType = {
    id: number | null
}

export type CreateUserArgsType = {
    name: string
    job: string
}