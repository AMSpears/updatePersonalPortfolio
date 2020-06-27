import React from "react"
import { Link } from "gatsby"
import SFTSansumgContent from '../components/projects/sftSamsung/sftSamsung'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const SFTSansumg = () => (
  <Layout>
    <SEO title="SFT Sansumg" />
    <SFTSansumgContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SFTSansumg
