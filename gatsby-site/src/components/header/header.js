import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ top, aboutMe, projects, medium, resume, contact }) => (
  <header>
    <div className="nav-container">
      <div className="nav-links">
        <Link to="/" activeClassName="active">{top}</Link>
      </div>
      <div className="nav-links">
        <Link to='#about-me' activeClassName="active">{aboutMe}</Link>
      </div>
      <div className="nav-links">
        <AnchorLink to='#projects' activeClassName="active">{projects}</AnchorLink>
      </div>
      <div className="nav-links">
        <AnchorLink to="#medium" activeClassName="active">{medium}</AnchorLink>
      </div>
      <div className="nav-links">
        <AnchorLink to="#resume" activeClassName="active">{resume}</AnchorLink>
      </div>
      <div className="nav-links">
        <AnchorLink to="#contact" activeClassName="active">{contact}</AnchorLink>
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
