import { useReducer } from "react"
import { types } from "../../types";
import { AuthContext, authReducer } from "./"

const initialState = {
    logged: false
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState);

    const login = (user) =>{
        const loginAction = {
            type: types.login,
            payload: user
        }

        dispatch(loginAction);
    }

    return (
        <AuthContext.Provider value={{ authState, login }}>
            { children }
        </AuthContext.Provider>
    )
}
