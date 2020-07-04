import React from "react"
import WeatherAppContent from '../components/projects/weatherApp/weatherApp'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const WeatherApp = () => (
  <Layout>
    <SEO title="Weather App" />
    <WeatherAppContent/>
  </Layout>
)

export default WeatherApp
