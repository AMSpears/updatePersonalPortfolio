import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const PentimentoContent = loadable(() => import('../components/projects/pentimento/pentimento'))

const Pentimento = () => (
  <Layout>
    <SEO title="Pentimento" />
    <PentimentoContent/>
  </Layout>
)

export default Pentimento
