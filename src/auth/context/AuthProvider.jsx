import { useReducer } from "react"
import { types } from "../../types";
import { AuthContext, authReducer } from "./"

const initialState = {
    logged: false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (name) =>{

        const user = {
            id: 'ABC',
            name
        }
        const loginAction = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(loginAction);
    }

    const logout = () => {
        const logoutAction = {
            type: types.logout
        }

        localStorage.removeItem('user');

        dispatch(logoutAction);
    }

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}
