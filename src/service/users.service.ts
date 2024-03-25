import {baseApi} from "./base-api";
import {RootState} from "./store";

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
                invalidatesTags: ['Users'],
                async onQueryStarted (args: UpdateUserArgsType, {dispatch, getState, queryFulfilled}) {
                    const state = getState() as RootState

                    dispatch(usersService.util.updateQueryData('getUsers', undefined, (draft) => {
                        const user = draft.data.find(user => user.id === +args.id)

                        const body = {
                            'avatar': 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
                            'email': 'iteishnik@gmail.com',
                            'first_name': args.params.name,
                            'id': args.id,
                            'last_name': 'Piterson'
                        }

                        if (user) {
                            Object.assign(user, {
                                ...user,
                                ...body
                            })
                        }

                    }))
                    await queryFulfilled
                },
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