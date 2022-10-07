import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context"

export const PrivateRouter = ({ children }) => {

    const { authState } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath');

    return (authState.logged) ? children : <Navigate to="/login" />
}
