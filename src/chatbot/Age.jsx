import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ScrollMenu from "react-horizontal-scroll-menu";
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux'

import { setAgeMessageFlag, setTimerFlag, setAge } from '../redux/index'

const Age = (props) => {
  const dispatch = useDispatch()
  const [ageList, setAgeList] = useState([]);
  const [selected, setSelected] = useState();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const array = []
    for(let i = 18; i<41;i++) {
      array.push(i);
    }
    setAgeList(array);
  }, []);

  const MenuItem = ({ text, selected, key }) => {
    if (selected) {
      return (
        <Button variant="contained">
          {text}
        </Button>
      );
    }
    return (
      <Button>
        {text}
      </Button>
    );
  };

  const Menu = (selected) =>
    ageList.map((item) => {
      return (
        <MenuItem
          text={item}
          key={item}
          selected={selected}
        />
      );
    });

  const Arrow = ({ text, className }) => {
    return (
      <div className="buttonContainer">
        <div className={className}>{text}</div>
      </div>
    );
  };

  const ArrowLeft = Arrow({ text: "<", className: "button" });
  const ArrowRight = Arrow({ text: ">", className: "button" });

  const onSelect = (key) => {
    if (key === selected) {
      setSelected(0);
    } else {
      setSelected(key);
    }
  };

  const submitDate = () => {
    if (selected) {
      const message = createClientMessage(String(selected)); 
      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
      dispatch(setAgeMessageFlag(false))
      dispatch(setTimerFlag(true))
      dispatch(setAge(selected))
      setShowButton(false);
    }
  }

  const menu = Menu(selected);

  if (!showButton) {
    return null;
  }
  return (
    <>
      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
        scrollToSelected={true}
      />
      <div style={{
        display: "flex",
        justifyContent: 'center',
      }}>
        <Button style={{background: 'gray'}} onClick={submitDate}>
          Done
        </Button>
      </div>
    </>
  );
};

export default Age;
