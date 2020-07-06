import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import DaisysWineShopContent from "../components/projects/daisysWineShop/daisysWineShop"

const DaisysWineShop = () => (
  <Layout>
    <SEO title="Daisy's Wine Shop" />
    <DaisysWineShopContent/>
  </Layout>
)

export default DaisysWineShop
