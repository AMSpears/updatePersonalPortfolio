import React from "react"
import FoodSearchContent from '../components/projects/foodSearch/foodSearch'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const FoodSearch = () => (
  <Layout>
    <SEO title="Food Search" />
    <FoodSearchContent/>
  </Layout>
)

export default FoodSearch
