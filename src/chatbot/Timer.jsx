import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { setAgeMessageFlag } from '../redux/index'
import { useNavigate } from 'react-router-dom';
const Timer = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5)

  useEffect(() => {
    if (timer === 0) {
        dispatch(setAgeMessageFlag(false))
        navigate('/response', { replace: true });
    } else {
        const interval = setInterval(() => {
            setTimer(timer-1)
        }, 1000);
        return () => clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return (
    <div style={{
        display: "flex",
        justifyContent: 'center',
      }}>
        {timer}
    </div>
  );
};

export default Timer;
