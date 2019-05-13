import React from 'react'
import axios from 'axios'

const Lines = ({ name, lineStatuses }) => {
  return (
    <div>
      <p><strong>{name}: </strong></p>
      <p> {lineStatuses[0].statusSeverityDescription}</p>
    </div>
  )
}

class Service extends React.Component {
  constructor() {
    super()

    this.state = { tubes: '' }

  }
  componentDidMount() {
    this.getAllLines()
    setInterval(() => this.getAllLines(), 10000)
  }

  getAllLines() {
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(res => this.setState({ tubes: res.data}))
      .catch(err => this.setState({ error: err.message }))
  }

  render() {
    console.log(this.state.tubes, 'tubes')
    return (
      <div>
        {!this.state.tubes && !this.state.error && <p><strong> ...tube status unavailable </strong></p>}
        { this.state.error &&
            <div className={this.state.id}>
              <p><strong>Service currently unavailable</strong></p>
              <p>{this.state.error}</p>
            </div>
        }
        {this.state.tubes && this.state.tubes.map((tubes, i) => <Lines key={i} {...tubes}/>)}
      </div>
    )
  }
}

export default Service
