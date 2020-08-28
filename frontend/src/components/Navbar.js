import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_item">Logo</div>
      <div className="navbar_item navbar_right navbar_auth">
        <a href="#" className="navbar_item navbar_auth_item">Login</a>
        <a href="#" className="navbar_item navbar_auth_item">Register</a>
      </div>
    </nav>
  )
}

export default Navbar