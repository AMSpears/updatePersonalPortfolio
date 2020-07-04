import React from 'react'
import {Link} from 'gatsby'
import HeaderImg from '../../../images/projects/aboveAllSecurity/above-all-security1.jpg'
import SectionImgOne from '../../../images/projects/aboveAllSecurity/above-all-security2.jpg'
import '../style/projectPage.scss'


const AboveAllSecurity = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Above All Security</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p>React, Node, Express, Nodemaile</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "http://above-all-security.com/" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>Created and maintaining the company website for a Washington, DC based security firm. </p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div id = 'next-project-link-container'>
            <h3>Next Project</h3>
            <Link to= '/provide-services'> Provide Services </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboveAllSecurity
