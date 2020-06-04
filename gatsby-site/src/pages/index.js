import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from '../components/about/about'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
  </Layout>
)

export default IndexPage
