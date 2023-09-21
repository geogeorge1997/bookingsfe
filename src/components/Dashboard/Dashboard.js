import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

export default function Dashboard () {
//   const dispatch = useDispatch()
  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <><div>
      <h2>Welcome to React Router Tutorial</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/preferences'} className="nav-link">Preferences</Link></li>
        </ul>
      </nav>
    </div><h2>Dashboard</h2></>
  )
}