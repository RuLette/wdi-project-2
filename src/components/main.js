import React from 'react'
import Weather from './weather'
import Service from './service'
import Events from './events'
import Header from './header'
const moment = require('moment')
const today = moment().format('dddd, MMMM Do YYYY')

const Main = () => {
  return (
    <div className="section has-text-centered">
      <Header />
      <div className="eventsbox">
        <p><strong>A guide to festivals around London</strong></p>
        <p>{today}</p>
      </div>
      <div className="box">
        <h1><strong>Festivals</strong></h1>
        <hr />
        <Events />
      </div>
      <div className="row columns">
        <div className="column is-half">
          <div className="box">
            <div className="control is-expanded">
              <div className="has-text-centered">
                <p><strong>Weather</strong></p>
                <hr />
                <Weather />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="box height">
            <div className="control is-expanded">
              <div className="has-text-centered">
                <p><strong>Tube Status</strong></p>
                <hr />
                <Service />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
