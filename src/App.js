import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

import RouterItems from './router/RouterItems'

function App () {
  return (
    <Provider store={store}>
      <div className="wrapper">
      <RouterItems></RouterItems>
    </div>
    </Provider>
  )
}

export default App