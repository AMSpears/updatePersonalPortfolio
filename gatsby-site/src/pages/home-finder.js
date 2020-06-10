import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const HomeFinder= () => (
  <Layout>
    <SEO title="Home Finder" />
    <h1>Home Finder</h1>
    <p>Content under construction</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HomeFinder
