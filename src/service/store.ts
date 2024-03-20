import { configureStore } from '@reduxjs/toolkit'
import {baseApi, baseAuthApi} from "./base-api";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [baseAuthApi.reducerPath]: baseAuthApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware, baseAuthApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>