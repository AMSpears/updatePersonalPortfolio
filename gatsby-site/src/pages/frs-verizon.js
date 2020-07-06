import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const FRSVerizonContent = loadable(() => import('../components/projects/frsVerizon/frsVerizon'))

const FirstRespondersVerizon= () => (
  <Layout>
    <SEO title="FRS Verizon" />
    <FRSVerizonContent/>
  </Layout>
)

export default FirstRespondersVerizon
