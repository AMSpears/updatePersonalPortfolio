import React from "react"
import HomeFinderContent from '../components/projects/homeFinder/homeFinder'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const HomeFinder= () => (
  <Layout>
    <SEO title="Home Finder" />
    <HomeFinderContent/>
  </Layout>
)

export default HomeFinder
