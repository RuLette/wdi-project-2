import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Map from './map'
import Header from './header'
const skiddleKey = process.env.SKIDDLEKEY
import Nav from './nav'
const moment = require('moment')


class EventShow extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get(`https://www.skiddle.com/api/v1/events/${this.props.match.params.id}`, {
      params: {
        api_key: skiddleKey
      }
    })
      .then(res => this.setState({ event: res.data.results }))
  }

  render() {
    if (!this.state.event) return(
      <div className="section">
        <div className="container">
          <p>Loading...</p>
        </div>
      </div>
    )
    const {event} = this.state
    const location = {
      lat: event.venue.latitude,
      lng: event.venue.longitude
    }
    const venue = {...event.venue}
    return(
      <div className="container">
        <div className="section eventshow">
          <Nav />
          <Link to='/events' >
            <Header />
          </Link>
          {!event && <p>Event Loading...</p>}
          <div className="row columns">
            <div className="column is-half">
              <div className="box">
                <h4 className="title is-4">{event.venue.name}</h4>
                <div className="column">
                  <figure className="image">
                    <img src={event.largeimageurl} alt={event.eventname} />
                  </figure>
                </div>
                <div className="column">
                  <p>{event.description}</p>
                  <h5><strong>Date: </strong>
                    {moment(event.date).format('dddd, MMMM Do YYYY')}
                  </h5>
                  <p><strong>Event start:</strong> {event.openingtimes.doorsopen}</p>
                  <p><strong>Event close:</strong> {event.openingtimes.doorsclose}</p>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="box">
                <h4 className="title is-6">Location</h4>
                <p>{event.venue.address}</p>
                <p>{event.venue.town}</p>
                <p>{event.venue.country}</p>
                <p>Contact: {event.venue.phone}</p>
                <Map location={location} venue={venue} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventShow
