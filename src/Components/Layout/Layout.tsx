import {FC, ReactNode} from "react";
import {Outlet} from "react-router-dom";

type PropsType = {
    children?: ReactNode
}

export const Layout: FC<PropsType> = ({children}) => {
    return (
        <div>{children ? children : <Outlet />}</div>
    );
};