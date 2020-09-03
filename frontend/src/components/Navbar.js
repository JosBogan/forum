
// Libraries
import React, {useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'

// Lib
import Auth from '../lib/auth'

function Navbar(props) {

  useEffect(() => {
    console.log('here')
  }, [])

  return (
    <nav className="navbar">
      <Link to="/" className="navbar_item">Logo</Link>
      <div className="navbar_item navbar_right navbar_auth">
        <Link to="/rooms" className="navbar_item navbar_auth_item">Rooms</Link>
        {!Auth.isAuthenticated() && <Link to="/login" className="navbar_item navbar_auth_item">Login</Link>}
        {!Auth.isAuthenticated() && <Link to="/register" className="navbar_item navbar_auth_item">Register</Link>}
      </div>
    </nav>
  )
}

export default withRouter(Navbar)