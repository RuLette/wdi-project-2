import React from 'react'
import axios from 'axios'

const weatherkey = process.env.WEATHER_KEY
const moment = require('moment')

class Weather extends React.Component {
  constructor() {
    super()
    this.state = { weather: null }
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${weatherkey}&units=metric`)
      .then(res => this.setState({weather: res.data}))
  }

  render() {
    console.log(this.state.weather, 'weather')
    return (
      <div>
        {this.state.weather &&
          <div>
            <div>
              <p><strong>Temperature now:</strong></p>
              <p> {this.state.weather.main.temp } &deg;C</p>

            </div>
            <div>
              <p><strong>Temperature min:</strong></p>
              <p> {this.state.weather.main.temp_min} &deg;C</p>
            </div>
            <div>
              <p><strong>Temperature max:</strong></p>
              <p> {this.state.weather.main.temp_max} &deg;C</p>
              <div>
                <p><strong>Forecast: </strong></p>
                <p>
                  {this.state.weather.weather[0].main}</p>
              </div>
              <div>
                <p><strong>Description: </strong></p>
                <p>
                  {this.state.weather.weather[0].description.substring(0, 1).toUpperCase() + this.state.weather.weather[0].description.substring(1).toLowerCase()}</p>
              </div>
              <div>
                <p><strong>Sunrise: </strong></p>
                <p>
                  {moment.unix(  this.state.weather.sys.sunrise).format('h:mm:ss A')}</p>
              </div>
              <div>
                <p><strong>Sunset: </strong></p>
                <p>
                  {moment.unix(  this.state.weather.sys.sunset).format('h:mm:ss A')}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Weather
