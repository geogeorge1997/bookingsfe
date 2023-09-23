// new file called GotItButton.jsx
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';  
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux'
import { setInitialMessageFlag, setCalendarMessageFlag } from '../redux/index'

const Welcome = (props) => {
  const dispatch = useDispatch()
  const [showButton, setShowButton] = useState(true);
  useEffect(() => {
  }, []);

  return (
    <>
    {
        showButton &&
        <Button onClick={() => {  
            const message = createClientMessage('Got It'); 
            props.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
              dispatch(setInitialMessageFlag(false))
              dispatch(setCalendarMessageFlag(true))
              setShowButton(false);
          }}   variant="contained" disableElevation>  
            Got It 
        </Button>
    }  
    </>
  );
};

export default Welcome;