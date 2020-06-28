import React from 'react'
import {Link} from 'gatsby'
import './otherProjects.scss'
import FoodSearch from '../../images/projects/food-search-tb.jpg'
import ShoppingList from '../../images/projects/shopping-list-2.jpg'
import HomeFinder from '../../images/projects/real-estate-tb.jpg'
import TriviaGame from '../../images/projects/trivia-game.jpg'
import WeatherApp from '../../images/projects/weather-app-tb.png'

const OtherProjects = () => {
  return (
    <div  id = 'other-projects' className = 'other-projects-section-container'>
      <div>
        <h1>Other Projects</h1>
        <div className = 'other-projects-container'>
          <div className = 'other-projects'>
            <Link to = '/food-search'>
              <img className = 'project-img even' src = {FoodSearch} alt = 'Food Search'/>
            </Link>
          </div>
          <div className = 'other-projects'>
            <Link to = '/shopping-list'>
              <img  className = 'project-img odd' src = {ShoppingList} alt = 'Shopping List'/>
            </Link>
          </div>
          <div className = 'other-projects'>
            <Link to = '/weather-app'>
              <img className = 'project-img even' src = {WeatherApp} alt = 'Weather App'/>
            </Link>
          </div>
          <div className = 'other-projects'>
            <Link to = '/trivia-game'>
              <img className = 'project-img odd' src = {TriviaGame} alt = 'Trivia Game'/>
            </Link>
          </div>
          <div className = 'other-projects'>
            <Link to = '/home-finder'>
              <img className = 'project-img even' src = {HomeFinder} alt = 'Home Finder' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default OtherProjects
