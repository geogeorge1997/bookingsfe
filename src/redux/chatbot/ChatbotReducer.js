import { 
  SET_INITIAL_MESSAGE_FLAG, 
  SET_WELCOMEL_MESSAGE_FLAG,
  SET_CALENDAR_MESSAGE_FLAG, 
  SET_NAME_MESSAGE_FLAG,
  SET_AGE_MESSAGE_FLAG,
  SET_TIMER_FLAG,
  SET_CALENDAR, 
  SET_NAME, 
  SET_AGE } from './ChatbotActionTypes'
// initializing state
const initialState = {
  initialMessageFlag: false,
  welcomeMessageFlag: false,
  calendarMessageFlag: false,
  nameMessageFlag: false,
  ageMessageFlag: false,
  timerFlag: false,
  name: '',
  calendar: '',
  age: ''
}

const chatbotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_MESSAGE_FLAG:
      return {
        ...state,
        initialMessageFlag: action.payload
      }
    case SET_WELCOMEL_MESSAGE_FLAG:
      return {
        ...state,
        welcomeMessageFlag: action.payload
      }
    case SET_CALENDAR_MESSAGE_FLAG:
      return {
        ...state,
        calendarMessageFlag: action.payload
      }
    case SET_NAME_MESSAGE_FLAG:
      return {
        ...state,
        nameMessageFlag: action.payload
      }
    case SET_AGE_MESSAGE_FLAG:
      return {
        ...state,
        ageMessageFlag: action.payload
      }
    case SET_TIMER_FLAG:
      return {
        ...state,
        timerFlag: action.payload
      }
    case SET_NAME:
        return {
          ...state,
          name: action.payload
        }
    case SET_CALENDAR:
        return {
          ...state,
          calendar: action.payload
        }
    case SET_AGE:
        return {
          ...state,
          age: action.payload
        }
    default:
      return state
  }
}

export default chatbotReducer