import {Link} from "gatsby"
import React from "react"
import "./style/projects.scss"

import Pentimento from '../../images/projects/Pentimento-tb.jpg'
import WineShop from '../../images/projects/daisys-wine-shop-tb.jpg'
import FRS_Project from '../../images/projects/verizon-tb.jpg'
import SFT_Project from '../../images/projects/samsung-tb.jpg'
import Above_All_Security from '../../images/projects/above-all-tb.jpg'
import Provide_Services from '../../images/projects/provide-services.jpg'

const Projects = () => {
  return (
    <div id = 'projects' className = 'projects-container'>
      <div>
        <div><h1>Select Works</h1></div>
        <div className = 'projects-inner-container'>
          <div className = 'project'>
              <Link to = '/frs-verizon'>
                <img src = {FRS_Project} alt = 'First Responders - Verizon'/>
                <h2>Verizon: First Responders </h2>
                <p>React</p>
              </Link>
            </div>
            <div className = 'project' id = 'second-column'>
              <Link to = '/pentimento'>
                <img src = {Pentimento} alt = 'Pentimento'/>
                <h2>Pentimento </h2>
                <p>Mapbox, React, Redux, Node, Express, Sequelize, Cloudinary</p>
              </Link>
            </div>
            <div className = 'project'>
              <Link to = '/daisys-wine-shop'>
                <img src = {WineShop} alt = 'Daisys Wine Shop'/>
                <h2>Daisy&apos;s Wine Shop </h2>
                <p>React, Redux, Node, Express, Sequelize</p>
              </Link>
            </div>
            <div className = 'project'>
              <Link to = '/sft-sansumg'>
                <span></span>
                <img src = {SFT_Project} alt = 'Solve For Tomorrow - Sansumg'/>
                <h2>Sansumg: Solve For Tomorrow</h2>
                <p>Javascript</p>
              </Link>
            </div>
            <div className = 'project'>
              <Link to = '/above-all-security'>
                <img src = {Above_All_Security} alt = 'Above All Security'/>
                <h2>Above All Security </h2>
                <p>React, Node, Express, Nodemailer</p>
              </Link>
            </div>
            <div className = 'project'>
              <Link to = '/provide-services'>
                <img src = {Provide_Services} alt = 'Provide Services' />
                <h2>Provide Services </h2>
                <p>React, Node, Express, Nodemailer</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Projects
