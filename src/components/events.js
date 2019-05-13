import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const moment = require('moment')

const skiddleKey = process.env.SKIDDLEKEY

class Events extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }
  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/', {
      params: {
        latitude: 51.509865,
        longitude: -0.118092,
        radius: 5,
        order: 'date',
        eventcode: 'FEST',
        api_key: skiddleKey
      }
    })
      .then(res => this.setState({ events: res.data.results }))
  }

  render() {
    console.log(this.state.events, 'events')
    if (!this.state.events) return(
      <div>
        <main className="section">
          <div className="container">
            <p><strong>Events loading ...</strong></p>
          </div>
        </main>
      </div>
    )
    return (
      <div className="eventsbox">
        <div className="columns is-mobile is-multiline">
          {this.state.events && this.state.events.map(event => (
            <div key={event.id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile outer">
              <Link to={`/events/fest/${event.id}`} >
                <p className="eventname">{event.eventname}</p>
                <p> { moment(event.date).format('dddd, MMMM Do YYYY')} </p>
                <figure className="outer">
                  <img src={event.imageurl} className="imgthumb"/>
                </figure>
              </Link>
            </div>))}
        </div>
      </div>
    )
  }
}

export default Events
