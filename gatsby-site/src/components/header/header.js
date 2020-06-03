import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({top, aboutMe, projects, medium, resume, contact}) => (
  <header>
    <div className= 'nav-container'>
      <div className = 'nav-links'>
        <Link to="/">
          {top}
        </Link>
      </div>
      <div className = 'nav-links'>
        <Link to="#aboutme">
          {aboutMe}
        </Link>
      </div>
      <div className = 'nav-links'>
        <Link to="#projects">
          {projects}
        </Link>
      </div>
      <div className = 'nav-links'>
        <Link to="#medium">
          {medium}
        </Link>
      </div>
      <div className = 'nav-links'>
        <Link to="#resume">
          {resume}
        </Link>
      </div>
      <div className = 'nav-links'>
        <Link to="#contact">
          {contact}
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  top: PropTypes.string,
  aboutMe: PropTypes.string,
  projects: PropTypes.string,
  medium: PropTypes.string,
  resume: PropTypes.string,
  contact: PropTypes.string

}

Header.defaultProps = {
  siteTitle: ``,
  top: `Top`,
  aboutMe: `About me`,
  projects: `Projects`,
  medium: `Medium`,
  resume: `Resume`,
  contact: `Contact`
}

export default Header
