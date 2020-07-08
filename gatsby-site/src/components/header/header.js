import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, {Component} from 'react'
import Resume from '../../resume/AngieSpears_Resume.pdf'
import './header.scss'

class Header extends Component {
  constructor() {
    super()
    this.menuItems = React.createRef()

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  openNav() {
    const innerWidth = typeof window !== 'undefined' ? window.innerWidth : ''
    //https://stackoverflow.com/questions/14949011/random-color-from-array
    const colors = ['#EEA4F9', '#F7D6AC', '#E4FCCC', '#A7D7FA']
    if (innerWidth < 769) {
      this.menuItems.current.style.width = '100%'
      this.menuItems.current.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }
  }

  closeNav() {
    const innerWidth = typeof window !== 'undefined' ? window.innerWidth : ''
    if (innerWidth < 769) {
      this.menuItems.current.style.width = '0%'
    }
  }


  render() {
    const path = typeof window !== 'undefined' ?  window.location.pathname : ''
    return (
      <header>
        <div className='nav-container'>
          <div id = 'logo'><Link to = '/'>Angie Spears</Link></div>
          <div className='menu-icon' onClick={() => this.openNav()}>
            <div />
            <div />
            <div />
          </div>
          <div className='nav-links-overlay' ref={this.menuItems}>
            <a href='#' className='closebtn' onClick={() => this.closeNav()}>
              &times;
            </a>
            <div className='nav-links' onClick={() => this.closeNav()}>

              {
                path === '/' ? (
                  <div>
                    <AnchorLink to="/#about-me" title="About Me" />
                    <AnchorLink to="/#select-works" title="Projects" />
                    <AnchorLink to="/#medium" title="Medium" />
                    <AnchorLink to="/#other-projects" title="Other projects" />
                    <AnchorLink to="/#contact" title="Contact" />
                    <a href={Resume} target = '_blank' rel='noreferrer' aria-label='Resume'>Resume</a>
                  </div>
                  ) : (
                  <div>
                    <Link to="/"> Home </Link>
                    <AnchorLink to={`${path}/#contact`} title="Contact" />
                    <a href={Resume} target = '_blank' rel='noreferrer' aria-label='Resume'>Resume</a>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </header>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string

}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

