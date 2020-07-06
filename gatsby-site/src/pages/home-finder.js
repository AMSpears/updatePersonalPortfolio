import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import HomeFinderContent from '../components/projects/homeFinder/homeFinder'

const HomeFinder= () => (
  <Layout>
    <SEO title="Home Finder" />
    <HomeFinderContent/>
  </Layout>
)

export default HomeFinder
