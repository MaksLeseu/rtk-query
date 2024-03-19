import {baseApi} from "./base-api";

const usersService =  baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            getUsers: builder.query<UsersType, void>({
                query: () => `/users`,
                providesTags: ['Users']
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
                },
                invalidatesTags: ['Users']
            }),
            updateUser: builder.mutation<UpdateUserArgsType, CreateUserArgsType>({
                query: (args: UpdateUserArgsType) => {
                    if (args.params.name) {
                        return {
                            url: `/users/${args.id}`,
                            method: 'PUT',
                            body: args.params
                        }
                    }
                }
            }),
            deleteUser: builder.mutation<UserArgType | void>({
                query: (arg: UserArgType) => {
                    if (arg.id) {
                        return {
                            url: `/users/${arg.id}`,
                            method: 'DELETE',
                        }
                    }
                }
            })
        }
    },
})

export const { useGetUsersQuery, useGetUserQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = usersService

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

type UpdateUserArgsType = {
    id: string
    params: CreateUserArgsType
}