import React from "react"
import { Link } from "gatsby"
import PentimentoContent from '../components/projects/pentimento/pentimento'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const Pentimento = () => (
  <Layout>
    <SEO title="Pentimento" />
    <PentimentoContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Pentimento
