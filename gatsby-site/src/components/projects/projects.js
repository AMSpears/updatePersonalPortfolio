// import {Link} from "gatsby"
import React from "react"
import "./style/projects.scss"
import FRS_Project from './images/projects/FRS_Project.jpg'
import SFT_Project from './images/projects/SFT_Project.jpg'
import Above_All_Security from './images/projects/above-all-security.jpg'
import Shopping_List from './images/projects/shopping-list.jpg'
import Home_Finder from './images/projects/home-finder.jpg'
import Trivia_Game from './images/projects/trivia-game.jpg'
import Weather_App from './images/projects/weather-app.jpg'


const Projects = () => {
  return (
    <div className = 'projects-container'>
     <h1>Select Works</h1>
     <div className = 'projects-imgs-container'>
      <div className = 'project'>
        <img src = {FRS_Project}/>
      </div>
      <div className = 'project'>
        <img src = {SFT_Project}/>
      </div>
      <div className = 'project'>
        <img src = {Above_All_Security}/>
      </div>
      <div className = 'project'>
        <img src = {Shopping_List}/>
      </div>
      <div className = 'project'>
        <img src = {Home_Finder}/>
      </div>
      <div className = 'project'>
        <img src = {Trivia_Game}/>
      </div>
      <div className = 'project'>
        <img src = {Weather_App}/>
      </div>
     </div>
    </div>
  )
}

export default Projects
