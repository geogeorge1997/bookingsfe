import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState ,children }) => {

  const handleWelcome= () => {
    const botMessage = createChatBotMessage(
      " Hello, Welcome to student info system!",
      {
        widget: 'welcome',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [botMessage],
    }));
  };

  const handleCalendar= () => {
    const botMessage = createChatBotMessage(
      "Pick a slot",
      {
        widget: 'calendar',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleName= () => {
    const botMessage = createChatBotMessage(
      "Enter your Name",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAge= () => {
    const botMessage = createChatBotMessage(
      "Enter your Age",
      {
        widget: 'age',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTimer= () => {
    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit",
      {
        widget: 'timer',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleWelcome,
            handleCalendar,
            handleName,
            handleAge,
            handleTimer,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;