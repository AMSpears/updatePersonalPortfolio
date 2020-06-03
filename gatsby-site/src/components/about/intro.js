import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react"
import './style/intro.scss'

const Intro = () => {
  return (
    <AnchorLink to = '#about-me' className = 'intro-container' stripHash>
      <h1>Intro</h1>
    </AnchorLink>
  )
}


export default Intro
