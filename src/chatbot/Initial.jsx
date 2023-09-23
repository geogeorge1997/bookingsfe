// new file called GotItButton.jsx
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';  
import { createChatBotMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux'
import { setInitialMessageFlag } from '../redux/index'

const Initial = (props) => {
  const dispatch = useDispatch()
  const [showButton, setShowButton] = useState(true);
  useEffect(() => {
  }, []);

  return (
    <>
    {
        showButton &&
        <Button onClick={() => {  
            const message = createChatBotMessage('...'); 
            props.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
              dispatch(setInitialMessageFlag(true))
              setShowButton(false);
          }}   variant="contained" disableElevation>  
            Got It 
        </Button>
    }  
    </>
  );
};

export default Initial;