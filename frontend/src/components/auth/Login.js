
// Libraries
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Lib

import { headers } from '../../lib/headers'

function Login() {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function onChange(event) {
    setData({...data, [event.target.name]: event.target.value })
  }

  async function onSubmit(event) {
    event.preventDefault()
    console.log(data)
    try {
      const res = await axios.post('http://localhost:8000/auth/login/',
        {...data}, headers)
      console.log(res.data)
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
          <label className="auth_input_label" for="email">Email</label>
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
          <label className="auth_input_label" for="for">Password</label>
          </div>
          <input 
            id="password" 
            type="password" 
            className="auth_text_input" 
            onChange={onChange}
            name="password"
          ></input>
        </div>
        <div className="auth_form_input_container">
          <button type="submit" className="submit_button" >Login</button>          
        </div>
      </form>
    </div>
  )
}

export default Login