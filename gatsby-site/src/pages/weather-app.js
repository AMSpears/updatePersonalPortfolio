import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const WeatherApp = () => (
  <Layout>
    <SEO title="Weather App" />
    <h1>Weather App</h1>
    <p>Content under construction</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WeatherApp
