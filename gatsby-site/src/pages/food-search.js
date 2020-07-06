import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import FoodSearchContent from '../components/projects/foodSearch/foodSearch'

const FoodSearch = () => (
  <Layout>
    <SEO title="Food Search" />
    <FoodSearchContent/>
  </Layout>
)

export default FoodSearch
