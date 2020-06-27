import React from "react"
import { Link } from "gatsby"
import HomeFinderContent from '../components/projects/homeFinder/homeFinder'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const HomeFinder= () => (
  <Layout>
    <SEO title="Home Finder" />
    <HomeFinderContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HomeFinder
