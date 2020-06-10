import {Link} from "gatsby"
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
        <Link to = '/frs-verizon'>
          <img src = {FRS_Project}/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/sft-sansumg'>
          <img src = {SFT_Project}/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/above-all-security'>
          <img src = {Above_All_Security}/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/shopping-list'>
          <img src = {Shopping_List}/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/home-finder'>
          <img src = {Home_Finder}/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/trivia-game'>
          <img src = {Trivia_Game}/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/weather-app'>
          <img src = {Weather_App}/>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default Projects
