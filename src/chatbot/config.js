// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Welcome from './Welcome';
import Calendar from './Calendar';
import Age from './Age';
import Timer from './Timer';

const botName = 'ChatBot';

const config = {
  initialMessages: [createChatBotMessage('...')],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
        widgetName: 'welcome',
        widgetFunc: (props) => <Welcome {...props}/>,
    },
    {
      widgetName: 'calendar',
      widgetFunc: (props) => <Calendar {...props}/>,
    },
    {
      widgetName: 'age',
      widgetFunc: (props) => <Age {...props}/>,
    },
    {
      widgetName: 'timer',
      widgetFunc: (props) => <Timer {...props}/>,
    },
  ],
};

export default config;