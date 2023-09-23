import { default as dayjs } from "dayjs";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ScrollMenu from "react-horizontal-scroll-menu";
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux'
import { setCalendarMessageFlag, setNameMessageFlag, setCalendar } from '../redux/index'

const Calendar = (props) => {
  const dispatch = useDispatch()
  const [daysOfweek, setDaysOfWeek] = useState([]);
  const [selected, setSelected] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [showButton, setShowButton] = useState(true);

  const getCurrentWeekDays = () => {
    const weekStart = dayjs().startOf("day");

    const days = [];
    for (let i = 0; i <= 6; i++) {
      days.push(dayjs(weekStart).add(i, "days"));
    }

    return days;
  };

  useEffect(() => {
    setDaysOfWeek(getCurrentWeekDays());
  }, []);

  const MenuItem = ({ text, selected, key }) => {
    // <div
    //     className={`menu-item dayItem ${selected ? "active" : ""} ${
    //       currentDay === text ? "today" : null
    //     }`}
    //     key={key}
    //   >
    //   </div>
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
    daysOfweek.map((day) => {
      return (
        <MenuItem
          text={day.format("DD MMM ddd")}
          key={day.format("DDMMM")}
          selected={selected}
        />
      );
    });

    const MenuMorning = (selectedTime) =>
    ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'].map((item) => {
      return (
        <MenuItem
          text={item}
          key={item}
          selected={selectedTime}
        />
      );
    });

    const MenuNoon = (selectedTime) =>
    ['02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'].map((item) => {
      return (
        <MenuItem
          text={item}
          key={item}
          selected={selectedTime}
        />
      );
    });

    const MenuEvening = (selectedTime) =>
    ['06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'].map((item) => {
      return (
        <MenuItem
          text={item}
          key={item}
          selected={selectedTime}
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

  const onSelectTime = (key) => {
    if (key === selectedTime) {
      setSelectedTime(0);
    } else {
      setSelectedTime(key);
    }
  };

  const submitDate = () => {
    if (selected && selectedTime) {
      const time = String(selected) + ' ' + String(selectedTime);
      const message = createClientMessage(time); 
      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
      dispatch(setCalendarMessageFlag(false))
      dispatch(setNameMessageFlag(true))
      dispatch(setCalendar(time))
      setShowButton(false);
    }
  }

  const menu = Menu(selected);
  const menuMorning = MenuMorning(selectedTime);
  const menuNoon = MenuNoon(selectedTime);
  const menuEvening = MenuEvening(selectedTime);

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
      Morning
      <ScrollMenu
        data={menuMorning}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selectedTime}
        onSelect={onSelectTime}
        scrollToSelected={true}
      />
      Noon
      <ScrollMenu
        data={menuNoon}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selectedTime}
        onSelect={onSelectTime}
        scrollToSelected={true}
      />
      Evening
      <ScrollMenu
        data={menuEvening}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selectedTime}
        onSelect={onSelectTime}
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

export default Calendar;
