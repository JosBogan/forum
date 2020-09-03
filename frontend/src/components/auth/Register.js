
// Libraries
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Lib
import { headers } from '../../lib/headers'
import Auth from '../../lib/auth'

function Register(props) {

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    password_confirmation: ""
  })

  function onChange(event) {
    setData({...data, [event.target.name]: event.target.value })
  }

  async function onSubmit(event) {
    event.preventDefault()
    console.log(data)
    try {
      const res = await axios.post('http://localhost:8000/auth/register/',
        {...data}, headers)
        props.history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="auth_form_container">
      <form 
        className="auth_form"
        onSubmit={onSubmit}
      >
        <h1>Login</h1>
        <div className="input_container">
          <div className="auth_form_input_container">
          <label className="auth_input_label" htmlFor="username">Username</label>
          </div>
          <input 
            id="username" 
            className="auth_text_input" 
            onChange={onChange}
            name="username"
          ></input>
        </div>
        <div className="input_container">
          <div className="auth_form_input_container">
          <label className="auth_input_label" htmlFor="email">Email</label>
          </div>
          <input 
            id="email" 
            className="auth_text_input" 
            onChange={onChange}
            name="email"
          ></input>
        </div>
        <div className="input_container">
          <div className="auth_form_input_container">
          <label className="auth_input_label" htmlFor="password">Password</label>
          </div>
          <input 
            id="password" 
            type="password" 
            className="auth_text_input" 
            onChange={onChange}
            name="password"
          ></input>
        </div>
        <div className="input_container">
          <div className="auth_form_input_container">
          <label className="auth_input_label" htmlFor="password_confirmation">Password Confirmation</label>
          </div>
          <input 
            id="password_confirmation" 
            type="password" 
            className="auth_text_input" 
            onChange={onChange}
            name="password_confirmation"
          ></input>
        </div>
        <div className="auth_form_input_container">
          <button type="submit" className="submit_button">Register</button>          
        </div>
      </form>
    </div>
  )
}

export default Register