import React from 'react'
import HeaderImg from '../../../images/projects/weatherApp/weather-app-1.jpg'
import SectionImgOne from '../../../images/projects/weatherApp/weather-app-2.jpg'

import '../style/projectPage.scss'


const WeatherApp = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>My Weather App</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p>Open Weather Map API, React</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "https://github.com/AMSpears/weatherapp" target= "blank">Github</a>
                  <a href= "http://my-weather-personalized.surge.sh/" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>A personalized weather application.</p>
                  <p>Developed this application querying real-time data from the Open Weather Map API to display the weather information of five cities. </p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default WeatherApp
