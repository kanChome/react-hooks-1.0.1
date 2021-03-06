import React, {useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events.js'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const insitalState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, insitalState)
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-field">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
