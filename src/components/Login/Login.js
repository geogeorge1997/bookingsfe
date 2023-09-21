/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/index'
import './Login.css'

async function loginUser (credentials, dispatch) {
  // change this inot promise
  const username = credentials.username
  const password = credentials.password
  console.log('Username - ', username)
  console.log('password - ', password)
  if (username === 'admin' && password === 'admin') {
    dispatch(setLogin(true))
    return 'Token'
  } else {
    return undefined
  }
}

export default function Login () {
  const dispatch = useDispatch()

  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser({
      username,
      password
    }, dispatch)
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => { setUserName(e.target.value) }}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}