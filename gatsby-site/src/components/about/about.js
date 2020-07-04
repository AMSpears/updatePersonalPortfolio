import React from "react"
import './style/about.scss'

const About = () => {
  return (
    <div id = 'about-me' className = 'about-container'>
      <div>
        <div id = 'header-container'><h1>About Me</h1></div>
        <div id = 'description-container'>
          <p> I&apos;ve worked with R/GA on projects for Verizon and Samsung. My Frontend experience include React, Preact and Gatsby. My backend experience includes Node, Express, Sequelize, MongoDB and more. I&apos;m currently looking to join a company where I could apply the things I&apos;ve learned, be challenged, and create both beautiful and useful products.
         </p>
        </div>
      </div>
    </div>
  )
}


export default About
