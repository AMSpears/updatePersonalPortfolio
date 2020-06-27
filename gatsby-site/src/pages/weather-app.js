import React from "react"
import { Link } from "gatsby"
import WeatherAppContent from '../components/projects/weatherApp/weatherApp'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const WeatherApp = () => (
  <Layout>
    <SEO title="Weather App" />
    <WeatherAppContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WeatherApp
