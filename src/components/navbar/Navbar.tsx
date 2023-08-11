import React from 'react';
import './navbar.scss';

export const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <h1 className='logo'>Joke App</h1>

      <div className='link-container'>
        <button className='action-btn'>action</button>
        <button className='logout-button'>Logout</button>
      </div>

    </nav>
  )
}
