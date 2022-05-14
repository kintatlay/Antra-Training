import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

export default function NavBar() {

  const linkCssStyle = ({isActive}) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
    textDecoration: 'none',
    padding: '5px 0',
    border: '2px solid #7600dc',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    width: '150px',
    height: '23px',
    margin: '0.5em 1em 0.5em 0'
  })

  return (
    <div className="nav__page--link">
        <span className="nav__page--project-name">Search Book</span>
        <NavLink 

          style={linkCssStyle}
          to="/home">
            Home
        </NavLink>
        <NavLink 
          style={linkCssStyle}
          to='/show-wishlist'
        >
          Show Wishlist
        </NavLink>
    </div>
  )
}
