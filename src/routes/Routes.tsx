import {Auth} from "../Auth";
import {Container} from "../Container";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {RequireAuth} from "../Components/RequireAuth/RequireAuth";

export const BASE_ROUTE = '/';

const publicRoutes = [
    {
        path: `${BASE_ROUTE}`,
        element: <Navigate to={`${BASE_ROUTE}page`} />
    },
    {
        path: `${BASE_ROUTE}login`,
        element: <Auth />
    }
]

const privateRoutes = [
    {
        path: `${BASE_ROUTE}page`,
        element: <Container />
    },
]

const router = createBrowserRouter([
    {
        element: <RequireAuth />,
        children: privateRoutes
    },
    ...publicRoutes
])

export const Router = () => {
    return <RouterProvider router={router}/>
}