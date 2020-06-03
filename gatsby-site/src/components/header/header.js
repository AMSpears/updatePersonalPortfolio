import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ top, aboutMe, projects, medium, resume, contact }) => (
  <header>
    <div className="nav-container">
      <div className="nav-links">
        <a to="/">{top}</a>
      </div>
      <div className="nav-links">
        <a href='#about-me'>{aboutMe}</a>
      </div>
      <div className="nav-links">
        <a to='#projects' >{projects}</a>
      </div>
      <div className="nav-links">
        <a to="#medium" >{medium}</a>
      </div>
      <div className="nav-links">
        <a to="#resume" >{resume}</a>
      </div>
      <div className="nav-links">
        <a to="#contact">{contact}</a>
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
