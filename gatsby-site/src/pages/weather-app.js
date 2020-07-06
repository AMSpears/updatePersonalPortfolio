import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const WeatherAppContent = loadable(() => import('../components/projects/weatherApp/weatherApp'))

const WeatherApp = () => (
  <Layout>
    <SEO title="Weather App" />
    <WeatherAppContent/>
  </Layout>
)

export default WeatherApp
