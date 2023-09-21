import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Dashboard from '../components/Dashboard/Dashboard'
import Preferences from '../components/Preferences/Preferences'
import Login from '../components/Login/Login'

function RouterItems () {
  const tokenValue = useSelector((state) => state.loginReducer.token)
  console.log('Token Value - ', tokenValue)
  if (!tokenValue) {
    return (
        <Login />
    )
  }
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
        {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default RouterItems