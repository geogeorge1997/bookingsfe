import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import loginReducer from './login/LoginReducer'

// Combining burgerReducer and pizzaReducer in rootReducer
const rootReducer = combineReducers({
  loginReducer,
})

const middlewares = [thunk]

// Passing rootReducer to createStore
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))


// sagaMiddleware.run(rootSaga)

export default store