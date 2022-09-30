import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
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
                    <span className="nav-item nav-link text-primary">
                        Marcel
                    </span>

                    <button className="nav-item nav-link btn btn-primary">
                        Logout
                    </button>


                </div>
            </div>
        </nav>
    )
}