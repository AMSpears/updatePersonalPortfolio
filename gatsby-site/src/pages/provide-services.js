import React from "react"
import { Link } from "gatsby"
import ProvideServicesContent from '../components/projects/provideServices/provideServices'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const ProvideServices = () => (
  <Layout>
    <SEO title="Provide Services" />
    <ProvideServicesContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProvideServices
