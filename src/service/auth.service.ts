import  {baseAuthApi} from "./base-api";

const authService = baseAuthApi.injectEndpoints({
    endpoints: builder => {
        return {
          login: builder.mutation<ResponseLoginType, LoginType>({
              query: (args: LoginType) => {
                  return {
                      url: '/login',
                      method: 'POST',
                      body: args
                  }
              }
          }),
          authMe: builder.mutation({
              query: (args: any) => {
                  return {
                      url: '/me',
                      method: 'POST',
                      body: args
                  }
              }
          })
        }
    }
})

export const {useLoginMutation, useAuthMeMutation} = authService

type LoginType = {
    email: string
    password: string
    rememberMe?: boolean
}

type ResponseLoginType = {
    id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
}