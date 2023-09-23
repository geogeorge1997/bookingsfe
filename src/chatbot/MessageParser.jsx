/* eslint-disable react-hooks/exhaustive-deps */
// in MessageParser.jsx
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setNameMessageFlag, setAgeMessageFlag, setName } from '../redux/index'

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();

  const initialMessageFlag = useSelector((state) => state.chatbotReducer.initialMessageFlag)
  const welcomeMessageFlag = useSelector((state) => state.chatbotReducer.welcomeMessageFlag)
  const calendarMessageFlag = useSelector((state) => state.chatbotReducer.calendarMessageFlag)
  const nameMessageFlag = useSelector((state) => state.chatbotReducer.nameMessageFlag)
  const ageMessageFlag = useSelector((state) => state.chatbotReducer.ageMessageFlag)
  const timerFlag = useSelector((state) => state.chatbotReducer.timerFlag)

  useEffect(() => {
  }, []);

  useEffect(() => {

    if (initialMessageFlag) {
      setTimeout(() => {
        actions.handleWelcome();
      }, 3000);
    }

    if (calendarMessageFlag) {
      actions.handleCalendar()
    }

    if (nameMessageFlag) {
      actions.handleName();
    }

    if (ageMessageFlag) {
      actions.handleAge()
    }

    if (timerFlag) {
      actions.handleTimer()
    }

  }, [initialMessageFlag, welcomeMessageFlag, calendarMessageFlag, nameMessageFlag,ageMessageFlag]);

  const parse = (message) => {
    if (message && nameMessageFlag) {
      dispatch(setNameMessageFlag(false))
      dispatch(setAgeMessageFlag(true))
      dispatch(setName(message))
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;