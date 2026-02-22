import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from './auth/AuthsProvider';

const Header = () => {

  const { islogged,setIslogges } = useContext(AuthContext);
  console.log(islogged,'8');
  
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/dashboard")
  }

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    setIslogges(false);
    navigate("/login");
  };

  return (
    <nav className='navbar container pt-3 pb-3 align-items-start'>
      <Link className='navbar-brand text-light' to="/">
        Stock Prediction Portal
      </Link>

      <div>
        {islogged ? (
          <>
           <button
            className='btn btn-danger'
            onClick={handleLogout}
          >
            Logout
          </button>
           <button
            className='btn btn-primary'
            onClick={handleNavigate}
          >
            Explore Dashboard
          </button>
          </>
         
          
        ) : (
          <>
            <Link className='btn btn-outline-info' to="/login">
              Login
            </Link>
            &nbsp;
            <Link className='btn btn-info' to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Header;