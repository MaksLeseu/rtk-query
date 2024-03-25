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
                // PESSIMISTIC UPDATES

                // It's important, to change data on currentData in hooks called useGetUsersQuery,
                // because the currentDate point is current data :) and to look the updated state, you should to complete it.
                async onQueryStarted (args: CreateUserArgsType, {dispatch, getState, queryFulfilled}) {

                    // The queryFulfilled is here, because the POST request should compete, after this
                    // data add to the state and after this the GET request to send to the server. We can see
                    // updated data after only POST request.
                    // (usually we send two requests to the server, to add something - POST, GET and only after
                    // complete GET request we can update data).
                    const res = await queryFulfilled

                    // undefined is key in the request. I can check it in Redux tool
                    dispatch(usersService.util.updateQueryData('getUsers', undefined, (draft) => {
                        const body = {
                            'avatar': 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
                            'email': 'iteishnik@gmail.com',
                            'first_name': args.name,
                            'id': 100500,
                            'last_name': args.job
                        }
                        draft.data.unshift(body)
                    }))
                },
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
                // OPTIMISTIC UPDATES
                async onQueryStarted (args: UpdateUserArgsType, {dispatch, getState, queryFulfilled}) {
                    const state = getState() as RootState

                    // The draft is - current state
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

                    // The queryFulfilled send request to the server. We create Optimistic update, to update data
                    // before send request. And for this we write the queryFulfilled after the dispatch function.
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