import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const FoodSearchContent = loadable(() => import('../components/projects/foodSearch/foodSearch'))

const FoodSearch = () => (
  <Layout>
    <SEO title="Food Search" />
    <FoodSearchContent/>
  </Layout>
)

export default FoodSearch
