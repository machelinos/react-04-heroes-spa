import { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {

    const navigate = useNavigate();
    const {pathname, search} = useLocation();

    const { authState, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();

        localStorage.setItem('lastPage', pathname+search);
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) =>{ return `nav-item nav-link${isActive ? ' active': ''}`}} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) =>{ return `nav-item nav-link${isActive ? ' active': ''}`}} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>{ return `nav-item nav-link${isActive ? ' active': ''}`}} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <div className="navbar-nav ml-auto">
                    <span
                        aria-label="username"
                        className="nav-item nav-link text-primary">
                        { authState?.user?.name }
                    </span>

                    <button
                        aria-label="logout"
                        className="nav-item nav-link btn btn-primary"
                        onClick={onLogout}
                    >
                        Logout
                    </button>


                </div>
            </div>
        </nav>
    )
}