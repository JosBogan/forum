import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from '../../lib/auth'

const SecureRoute = ({component: Component, ...rest}) => {
  if (Auth.isAuthenticated()) return   <Route {...rest} component={Component}/>
  Auth.logout()
  return <Redirect to="/"/>
}

export default SecureRoute