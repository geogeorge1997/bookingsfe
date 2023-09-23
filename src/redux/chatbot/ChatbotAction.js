import { 
    SET_LOAD_COUNT,
    SET_INITIAL_MESSAGE_FLAG, 
    SET_WELCOMEL_MESSAGE_FLAG,
    SET_CALENDAR_MESSAGE_FLAG, 
    SET_NAME_MESSAGE_FLAG,
    SET_AGE_MESSAGE_FLAG,
    SET_TIMER_FLAG,
    SET_CALENDAR, 
    SET_NAME, 
    SET_AGE } from './ChatbotActionTypes'


export const setLoadCount = (parameter) => {
  return {
    type: SET_LOAD_COUNT,
    payload: parameter
  }
}

export const setInitialMessageFlag = (parameter) => {
  return {
    type: SET_INITIAL_MESSAGE_FLAG,
    payload: parameter
  }
}

export const setWelcomeMessageFlag = (parameter) => {
  return {
    type: SET_WELCOMEL_MESSAGE_FLAG,
    payload: parameter
  }
}

export const setCalendarMessageFlag = (parameter) => {
    return {
      type: SET_CALENDAR_MESSAGE_FLAG,
      payload: parameter
    }
  }

  export const setNameMessageFlag = (parameter) => {
    return {
      type: SET_NAME_MESSAGE_FLAG,
      payload: parameter
    }
  }

  export const setAgeMessageFlag = (parameter) => {
    return {
      type: SET_AGE_MESSAGE_FLAG,
      payload: parameter
    }
  }

  export const setTimerFlag = (parameter) => {
    return {
      type: SET_TIMER_FLAG,
      payload: parameter
    }
  }

  export const setName = (parameter) => {
    return {
      type: SET_NAME,
      payload: parameter
    }
  }
  
  export const setCalendar = (parameter) => {
    return {
      type: SET_CALENDAR,
      payload: parameter
    }
  }
  
  export const setAge = (parameter) => {
    return {
      type: SET_AGE,
      payload: parameter
    }
  }