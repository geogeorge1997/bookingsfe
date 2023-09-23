import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import chatbotReducer from './chatbot/ChatbotReducer'

// Combining burgerReducer and pizzaReducer in rootReducer
const rootReducer = combineReducers({
  chatbotReducer,
})

const middlewares = [thunk]

// Passing rootReducer to createStore
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))


// sagaMiddleware.run(rootSaga)

export default store