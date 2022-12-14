import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const onLogin = () => {

    login('Marcel Cabrera');
    
    const lastPage = localStorage.getItem('lastPage') || '/'; 
    navigate(lastPage,{
      replace: true
    })
  }
  
  return (
    <div className="container mt-2">
        <h1>Login Page</h1>
        <hr />

        <button
          className="btn btn-primary"
          onClick={onLogin}
        >Login</button>

    </div>
  )
}
