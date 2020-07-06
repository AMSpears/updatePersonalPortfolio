import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import ProvideServicesContent from '../components/projects/provideServices/provideServices'

const ProvideServices = () => (
  <Layout>
    <SEO title="Provide Services" />
    <ProvideServicesContent/>
  </Layout>
)

export default ProvideServices
