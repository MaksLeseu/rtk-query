import  {baseAuthApi} from "./base-api";

const authService = baseAuthApi.injectEndpoints({
    endpoints: builder => {
        return {
          login: builder.mutation<any, LoginType>({
              invalidatesTags: ['Me'],
              query: (args: LoginType) => {
                  return {
                      url: '/login',
                      method: 'POST',
                      body: args,
                  }
              }
          }),
          me: builder.query({
              providesTage: ['Me'],
              query: () => '/me',
          })
        }
    }
})

export const {useLoginMutation, useMeQuery} = authService

export type LoginType = {
    email: string
    password: string
    rememberMe?: boolean
}