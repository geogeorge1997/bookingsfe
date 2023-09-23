/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import Button from '@mui/material/Button';  
import { useDispatch } from 'react-redux'
import { setInitialMessageFlag } from '../../redux/index'
import { useNavigate } from 'react-router-dom';
import './Enroll.css'

export default function Enroll () {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <h1>Enter into Student Info System</h1>
      <Button onClick={() => {  
              dispatch(setInitialMessageFlag(true))
              navigate('/chatbot', { replace: true });
          }}   variant="contained" disableElevation>  
            Enroll Now
        </Button>
    </div>
  )
}