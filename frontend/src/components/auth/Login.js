import React, { useEffect, useState } from 'react'
import { set } from 'js-cookie'

function Login() {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function onChange(event) {
    setData({...data, [event.target.name]: event.target.value })
  }

  function onSubmit(event) {
    event.preventDefault()
    console.log(data)
  }

  return (
    <div className="auth_form_container">
      <form 
        className="auth_form"
        onSubmit={onSubmit}
      >
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
          <button type="submit" className="" >Login</button>          
        </div>
      </form>
    </div>
  )
}

export default Login