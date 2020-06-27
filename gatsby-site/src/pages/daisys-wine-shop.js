import React from "react"
import { Link } from "gatsby"
import DaisysWineShopContent from '../components/projects/daisysWineShop/daisysWineShop'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const DaisysWineShop = () => (
  <Layout>
    <SEO title="Daisy's Wine Shop" />
    <DaisysWineShopContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DaisysWineShop
