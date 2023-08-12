import React from 'react';
import './navbar.scss';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  //remove cookie 
  const logOut = () => {
    Cookies.remove('token');
    navigate("/login");
  }

  return (
    <nav className='navbar-container'>
      <h1 className='logo'>Joke App</h1>

      <div className='link-container'>
        <button className='action-btn'>action</button>
        <button className='logout-button' onClick={() => logOut()}>Logout</button>
      </div>

    </nav>
  )
}
