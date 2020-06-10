import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import About from '../components/about/about'
import Projects from '../components/projects/projects.js'
import Articles from '../components/articles/articles'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
    <Projects/>
    <Articles/>
  </Layout>
)

export default IndexPage
