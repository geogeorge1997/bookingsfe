/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react' 
import { useSelector } from 'react-redux'

export default function Response () {
  const name = useSelector((state) => {
    return state.chatbotReducer.name
  })
  // const calendar = useSelector((state) => state.chatbotReducer.calendar)
  const age = useSelector((state) => state.chatbotReducer.age)

  return (
    <div style={{color: 'black'}}>
        <p>Your Name {name} aged {age} has been added to student system. You may now exit.</p>
    </div>
  )
}