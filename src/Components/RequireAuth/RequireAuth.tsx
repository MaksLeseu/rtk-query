import {BASE_ROUTE} from "../../routes/Routes";
import {Navigate} from "react-router-dom"
import {Layout} from "../Layout/Layout";

export const RequireAuth = () => {
    const state = false

    return state ? <Layout /> : <Navigate to={`${BASE_ROUTE}/login`} replace/>
};