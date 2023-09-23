import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import {Chatbot as Bot} from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../../chatbot/config';
import MessageParser from '../../chatbot/MessageParser';
import ActionProvider from '../../chatbot/ActionProvider';
import './Chatbot.css'
export default function Chatbot () {
  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center',height: '100vh'}}>
      <div className = "react-chatbot-kit-chat-container">
      <Bot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
    </div>
  )
}