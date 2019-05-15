# General Assembly Project 2

## Brief
Build a web application using at least one public api. It should Have
several components - at least one classical and one functional.

### Timeframe
2 days

## Technologies used

* React
* Axios
* Webpack
* Insomnia
* TFL API
* Open Weather API
* Skiddle API
* Mapbox-gl
* Dotenv
* GitHub
* Moment
* Bulma

## DayOut

Dayout is a simple application that shows the user festivals that are currently ongoing in London. It also displays the current weather and tube service status.

Upon selecting an event, the user may read its description while details of the venue are presented on a map using the Mapbox-gl API.

![dayout1](https://user-images.githubusercontent.com/29276064/57707760-18694180-7660-11e9-8800-d7f8b724f65d.png)

<br/>

![dayoutshow](https://user-images.githubusercontent.com/29276064/57706775-4d749480-765e-11e9-9f83-b6b36b40a53b.png)

## Process
After I decided to create a web app for events, I brainstormed the functionality I would have for the site.

- A homepage
- An index page which displayed festivals, the day's weather and TFL conditions
- Each event should have a show page of information, which could include a map showing the locale of the venue

I then began the project by researching which APIs were user friendly.
I started testing the APIs in Insomnia to get an idea what data was available before deciding which had the data I wanted.

![eventrequest](https://user-images.githubusercontent.com/29276064/57707002-c4aa2880-765e-11e9-9dca-af4a4cdad37a.png)

For pulling event data, I decided on the Skiddle API and narrowed the search down to just festivals. For weather information, I chose the Open Weather API for data on the weather in London. For tube service statuses, Transport For London (TFL)'s API was very handy as it was open source and did not require an API Key for requests.

After getting the information I required from the APIs, I drew wireframes out for each page in the application.

I used the Bulma CSS framework for styling and for making the site responsive.

## Challenges

The main challenge of the project was working with public APIs and combining them together. Mapbox-gl was tricky to navigate at first, and considerable time was taken to read the documentation provided on their website. For instance, I had to pass the data from Skiddle API of festival names and locations to Mapbox.

~~~
setMarker() {
  const { venue } = this.props
  const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`
      <h3><strong>${venue.name}</strong></h3>
      <p>${venue.address}</p>
      <p>${venue.town} ${venue.postcode}</p>
      <p><strong>Phone:</strong> ${venue.phone}</p>
    `)
  return new mapboxgl.Marker()
    .setLngLat(this.props.location)
    .setPopup(popup)
    .addTo(this.map)
}
~~~

Dates and times provided by APIs such as Skiddle occasionally needed to be reformatted to make the data more readable. Moment was a library converted that helped to to make the conversion of dates easier.

~~~
<h5><strong>Date: </strong>
  {moment(event.date).format('dddd, MMMM Do YYYY')}
</h5>
<p><strong>Event start:</strong> {event.openingtimes.doorsopen}</p>
<p><strong>Event close:</strong> {event.openingtimes.doorsclose}</p>
~~~

## Future features

- Given more time I would provide better styling
- Given more time the site would provide traffic conditions as well
- To expand on the site more event types could be created, not just festivals
- Use MapBoxGL to provide walking directions to the event
