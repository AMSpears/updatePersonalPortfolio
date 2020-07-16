import React from "react"
import './style/intro.scss'
import BioImage from '../../images/bio_pic.jpg'
const Intro = () => {
  return (
    <div className = 'intro-container'>
      <img src = {BioImage} alt= 'bio pic'/>
      <div>
        <div><h1>Hi there! <br/> I&apos;m Angie Spears</h1></div>
        <div><p>Full-stack Software Engineer proudly coding in New York City. I&apos;m a Grace Hopper and General Assembly Alum.</p></div>
      </div>
    </div>
  )
}

export default Intro
