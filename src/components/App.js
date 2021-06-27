import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events.js'
import AppContext from '../contexts/AppContext'

console.log(console.log(AppContext))

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])


  return (
    <AppContext.Provider value={"Hello,, I am a Provider."}>
    <div className="container-field">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
    </AppContext.Provider>
  )
}

export default App
