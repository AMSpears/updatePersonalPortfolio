import React from "react"
import { Link } from "gatsby"
import FRSVerizonContent from '../components/projects/frsVerizon/frsVerizon'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const FirstRespondersVerizon= () => (
  <Layout>
    <SEO title="FRS Verizon" />
    <FRSVerizonContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FirstRespondersVerizon
