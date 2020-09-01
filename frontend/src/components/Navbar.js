import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar_item">Logo</Link>
      <div className="navbar_item navbar_right navbar_auth">
        <Link to="/rooms" className="navbar_item navbar_auth_item">Rooms</Link>
        <Link to="/login" className="navbar_item navbar_auth_item">Login</Link>
        <Link to="/" className="navbar_item navbar_auth_item">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar