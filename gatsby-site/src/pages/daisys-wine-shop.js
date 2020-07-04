import React from "react"
import DaisysWineShopContent from '../components/projects/daisysWineShop/daisysWineShop'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const DaisysWineShop = () => (
  <Layout>
    <SEO title="Daisy's Wine Shop" />
    <DaisysWineShopContent/>
  </Layout>
)

export default DaisysWineShop
