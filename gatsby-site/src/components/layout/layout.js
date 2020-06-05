/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useRef, useEffect, useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import AboutMe from "../about/intro"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const mainContainer = useRef()
  // Referenced this https://stackoverflow.com/questions/57453141/using-react-hooks-to-update-w-scroll
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(20)

  useEffect( (e) => {
    const onScroll = (e) => {
      // Define random color
      const colors = ['#F76259', '#92F759', '#59F7E5', '#5985F7', '#DF5FFA']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      // Update backgroun img color
      mainContainer.current.style.backgroundImage = `linear-gradient(180deg, #ffffff 70%, ${randomColor} 100%)`
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > scrollTop)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`
        }}
      >
        <AboutMe/>
        <main in={scrolling ? 1 : 0} ref= {mainContainer}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
