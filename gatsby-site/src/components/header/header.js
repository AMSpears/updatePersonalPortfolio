import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

// ACTIVE NAV STYLE
const active = {
  color: `red`
}

const Header = ({ top, aboutMe, projects, medium, resume, contact }) => (
  <header>
    <div className="nav-container">
      <div className="nav-links">
        <Link to="/" activeStyle={active}>{top}</Link>
      </div>
      <div className="nav-links">
        <Link to="#aboutme" activeStyle={active}>{aboutMe}</Link>
      </div>
      <div className="nav-links">
        <Link to="#projects" activeStyle= {active}>{projects}</Link>
      </div>
      <div className="nav-links">
        <Link to="#medium" activeStyle= {active}>{medium}</Link>
      </div>
      <div className="nav-links">
        <Link to="#resume" activeStyle= {active}>{resume}</Link>
      </div>
      <div className="nav-links">
        <Link to="#contact" activeStyle= {active}>{contact}</Link>
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
