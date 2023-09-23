import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chatbot from '../components/Chatbot/Chatbot'
import Enroll from '../components/Enroll/Enroll'
import Response from '../components/Response/Response'

function RouterItems () {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Enroll />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/response" element={<Response />} />
        </Routes>
      </BrowserRouter>
  )
}

export default RouterItems