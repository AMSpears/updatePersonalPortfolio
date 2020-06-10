import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import About from '../components/about/about'
import Projects from '../components/projects/projects.js'
import Articles from '../components/articles/articles'
import OtherProjects from '../components/otherProjects/otherProjects'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
    <Projects/>
    <Articles/>
    <OtherProjects/>
  </Layout>
)

export default IndexPage
