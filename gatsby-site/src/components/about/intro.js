import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby"
import React from "react"
import './style/intro.scss'

const Intro = () => {
  return (
    <Link to = '#about-me' className = 'intro-container' stripHash>
      <h1>Intro</h1>
    </Link>
  )
}


export default Intro
