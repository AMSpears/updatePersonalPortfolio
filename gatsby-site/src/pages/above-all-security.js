import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import AboveAllSecurityContent from "../components/projects/aboveAllSecurity/aboveAllSecurity"

const AboveAllSecurity = () => (
  <Layout>
    <SEO title="Above All Security" />
    <AboveAllSecurityContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboveAllSecurity
