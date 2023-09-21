import React from 'react'
import { Link } from 'react-router-dom'

// import { useSelector } from 'react-redux'
export default function Preferences () {
//   const sagaData = useSelector((state) => state.sagaEgReducer.sagaData)
//   console.log('Preferces Component - ', sagaData)

  return (
    <><div>
      <h2>Welcome to React Router Tutorial</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/dashboard'} className="nav-link">Dashboard</Link></li>
        </ul>
      </nav>
    </div><h2>Preferences</h2></>

  )
}