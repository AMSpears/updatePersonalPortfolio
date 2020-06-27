import React from 'react'
import './otherProjects.scss'
import FoodSearch from '../../images/projects/food-search-tb.jpg'
import ShoppingList from '../../images/projects/shopping-list-2.jpg'
import HomeFinder from '../../images/projects/real-estate-tb.jpg'
import TriviaGame from '../../images/projects/trivia-game.jpg'
import WeatherApp from '../../images/projects/weather-app-tb.png'
// Temporary placeHolder
import AboveAllSecurity from '../../images/projects/above-all-tb.jpg'


const OtherProjects = () => {
  return (
    <div  id = 'other-projects' className = 'other-projects-section-container'>
      <div>
        <h1>Other Projects</h1>
        <div className = 'other-projects-container'>
          <div className = 'other-projects'>
            <img className = 'project-img even' src = {FoodSearch} alt = 'Food Search'/>
          </div>
          <div className = 'other-projects'>
            <img  className = 'project-img odd' src = {ShoppingList} alt = 'Shopping List'/>
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img even' src = {WeatherApp} alt = 'Weather App'/>
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img odd' src = {TriviaGame} alt = 'Trivia Game'/>
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img even' src = {HomeFinder} alt = 'Home Finder' />
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img odd' src = {AboveAllSecurity} alt = 'project-name'/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default OtherProjects
