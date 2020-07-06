import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const SFTsamsungContent = loadable(() => import('../components/projects/sftSamsung/sftSamsung'))

const SFTsamsung = () => (
  <Layout>
    <SEO title="SFT samsung" />
    <SFTsamsungContent/>
  </Layout>
)

export default SFTsamsung
