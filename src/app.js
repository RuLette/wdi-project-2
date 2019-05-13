import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import EventsIndex from './components/eventsIndex'
import EventShow from './components/eventShow'
import './style.scss'

const App = () => {
  return (
    <Browser>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events/fest/:id" component={EventShow} />
          <Route path="/events" component={EventsIndex} />
        </Switch>
      </div>
    </Browser>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
