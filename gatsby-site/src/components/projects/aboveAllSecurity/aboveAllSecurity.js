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
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <p><a href= "http://above-all-security.com/" target= "blank">Live</a></p>
                  <h2>Technologies</h2>
                  <p>React.js, Node.js, Express.js, Nodemailer</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Above All Security is a Washington D.C. based security firm. I developed and designed their website.This site helped Above All Security to communicate their services to future clients and connect with them.</p>
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
