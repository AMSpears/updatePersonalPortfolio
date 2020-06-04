import React from "react"
import './style/intro.scss'
import AboutMe from './about.js'

const Intro = () => {
  return (
    <a name = 'about-me'>
      <div className = 'intro-container'>
        <h1>Hi there!<br/>I'm Angie Spears</h1>
        <p>Full-stack Software Engineer proudly coding in New York City. I'm a Grace Hopper and General Assembly Alum.</p>
      </div>
      <AboutMe/>
    </a>
  )
}


export default Intro
