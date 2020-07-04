import React from 'react'
import {Link} from 'gatsby'
import HeaderImg from '../../../images/projects/sftSamsung/samsung-1.jpg'
import SectionImgOne from '../../../images/projects/sftSamsung/samsung-3.jpg'

import '../style/projectPage.scss'


const SFTSamsung = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Samsung: Solve For Tomorrow</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p>Javacript</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "https://www.samsung.com/us/solvefortomorrow/" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>Samsung runs an annual STEM contest called Solve For Tomorrow. At R/GA, I had the opportunity to work on their website to inspire interest in the STEM fields.</p>
                  <p>For each new phase of this campaign, I made updates in collaboration with other engineers, designers, and QA engineers</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>

          <div id = 'next-project-link-container'>
            <h3>Next Project</h3>
            <Link to= '/pentimento'> Pentimento</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SFTSamsung
