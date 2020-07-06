import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const AboveAllSecurityContent = loadable(() => import("../components/projects/aboveAllSecurity/aboveAllSecurity"))


const AboveAllSecurity = () => (
  <Layout>
    <SEO title="Above All Security" />
    <AboveAllSecurityContent/>
  </Layout>
)

export default AboveAllSecurity
