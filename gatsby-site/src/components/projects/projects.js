import {Link} from "gatsby"
import React from "react"
import "./style/projects.scss"
import Pentimento from './images/projects/pentimento-tb.jpg'
import WineShop from './images/projects/daisys-wine-shop-tb.jpg'
import FRS_Project from './images/projects/verizon-tb.jpg'
import SFT_Project from './images/projects/SFT_Project.jpg'
import Above_All_Security from './images/projects/above-all-tb.jpg'
import Shopping_List from './images/projects/shopping-list-2.jpg'
import Home_Finder from './images/projects/real-estate-tb.jpg'
import Trivia_Game from './images/projects/trivia-game.jpg'
import Weather_App from './images/projects/weather-app-tb.png'
import Provide_Services from './images/projects/provide-services.jpg'

const Projects = () => {
  return (
    <div id = 'projects' className = 'projects-container'>
    <div>
      <div><h1>Select Works</h1></div>

     <div className = 'projects-imgs-container'>
      <div className = 'project'>
        <Link to = '/pentimento'>
          <img src = {Pentimento} alt = 'Pentimento'/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/daisys-wine-shop'>
          <img src = {WineShop} alt = 'Daisys Wine Shop'/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/frs-verizon'>
          <img src = {FRS_Project} alt = 'First Responders - Verizon'/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/sft-sansumg'>
          <img src = {SFT_Project} alt = 'Solve For Tomorrow - Sansumg'/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/above-all-security'>
          <img src = {Above_All_Security} alt = 'Above All Security'/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/shopping-list'>
          <img src = {Shopping_List} alt = 'Shopping List' />
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/home-finder'>
          <img src = {Home_Finder} alt = 'Home Finder'/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/trivia-game'>
          <img src = {Trivia_Game} alt = 'Trivia Game'/>
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/weather-app'>
          <img src = {Weather_App} alt = 'Weather App' />
        </Link>
      </div>
      <div className = 'project'>
        <Link to = '/provide-services'>
          <img src = {Provide_Services} alt = 'Provide Services' />
        </Link>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Projects
