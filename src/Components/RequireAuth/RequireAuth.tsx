import {BASE_ROUTE} from "../../routes/Routes";
import {Navigate} from "react-router-dom"
import {useMeQuery} from "../../service/auth.service";
import {Outlet} from "react-router-dom";

export const RequireAuth = () => {
    const {isError, isLoading} = useMeQuery()

    if (isLoading) {
        return null
    }
    const state = !isError

    return state ? <Outlet /> : <Navigate to={`${BASE_ROUTE}login`}/>
};