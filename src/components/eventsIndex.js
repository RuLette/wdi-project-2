import React from 'react'
import { Link } from 'react-router-dom'
import Weather from '../components/weather.js'
import Main from '../components/main'
import Nav from './nav'

class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <Main />
      </div>

    )
  }
}

export default EventsIndex
