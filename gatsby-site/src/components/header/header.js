import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

// ACTIVE NAV STYLE
const active = {
  fontWeight: `bold`,
  textDecoration: `underline`
}

const Header = ({ top, aboutMe, projects, medium, resume, contact }) => (
  <header>
    <div className="nav-container">
      <div className="nav-links">
        <Link to="/" activeStyle={active}>{top}</Link>
      </div>
      <div className="nav-links">
        <AnchorLink to='#about-me' activeStyle={active}>{aboutMe}</AnchorLink>
      </div>
      <div className="nav-links">
        <AnchorLink to='#projects' activeStyle={active}>{projects}</AnchorLink>
      </div>
      <div className="nav-links">
        <AnchorLink to="#medium" activeStyle= {active}>{medium}</AnchorLink>
      </div>
      <div className="nav-links">
        <AnchorLink to="#resume" activeStyle= {active}>{resume}</AnchorLink>
      </div>
      <div className="nav-links">
        <AnchorLink to="#contact" activeStyle= {active}>{contact}</AnchorLink>
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
