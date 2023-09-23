import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import {Chatbot as Bot} from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../../chatbot/config';
import MessageParser from '../../chatbot/MessageParser';
import ActionProvider from '../../chatbot/ActionProvider';

export default function Chatbot () {
  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{
      display: "flex",
      justifyContent: 'center',
    }}>
      <Bot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}