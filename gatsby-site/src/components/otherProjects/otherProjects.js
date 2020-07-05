import React from 'react'
import {Link} from 'gatsby'
import './otherProjects.scss'
import FoodSearchDK from '../../images/projects/food-search-tb.jpg'
import ShoppingListDK from '../../images/projects/shopping-list-tb.jpg'
import FoodSearchMB from '../../images/projects/food-search-tb-mb.jpg'
import ShoppingListMB from '../../images/projects/shopping-list-tb-mb.jpg'

import HomeFinder from '../../images/projects/real-estate-tb.jpg'
import TriviaGame from '../../images/projects/trivia-game.jpg'
import WeatherApp from '../../images/projects/weather-app-tb.jpg'

const OtherProjects = () => {

  return (
    <div  id = 'other-projects' className = 'other-projects-section-container'>
      <div>
        <div id = 'header-container'><h1>Other Projects</h1></div>
        <div className = 'other-projects-container'>
          <div className = 'other-projects'>
            <Link to = '/food-search'>
              <img className = 'project-img even' src = {window.innerHeight > 768 ? FoodSearchDK : FoodSearchMB} alt = 'Food Search'/>
              <h2>Food Search </h2>
              <p>React, Node, express, Yelp API</p>
            </Link>
          </div>
          <div className = 'other-projects'>
            <Link to = '/shopping-list'>
              <img  className = 'project-img even' src = {window.innerHeight > 768 ? ShoppingListDK : ShoppingListMB} alt = 'Shopping List'/>
              <h2>Shopping List</h2>
              <p>Ruby on Rails</p>
            </Link>
          </div>
          <div className = 'other-projects'>
            <Link to = '/weather-app'>
              <img className = 'project-img odd' src = {WeatherApp} alt = 'Weather App'/>
              <h2>Weather App</h2>
              <p>React, Open Weather Map API</p>
            </Link>
          </div>
          <div className = 'other-projects'>
            <Link to = '/trivia-game'>
              <img className = 'project-img odd' src = {TriviaGame} alt = 'Trivia Game'/>
              <h2>Trivia Game</h2>
              <p>JavaScript, jQuery</p>
            </Link>
          </div>
          <div className = 'other-projects'>
            <Link to = '/home-finder'>
              <img className = 'project-img odd' src = {HomeFinder} alt = 'Home Finder' />
              <h2>Home Finder</h2>
              <p>React, Node, Express, MongoDB</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default OtherProjects
