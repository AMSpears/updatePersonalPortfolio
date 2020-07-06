import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const ProvideServicesContent = loadable(() => import('../components/projects/provideServices/provideServices'))

const ProvideServices = () => (
  <Layout>
    <SEO title="Provide Services" />
    <ProvideServicesContent/>
  </Layout>
)

export default ProvideServices
