import React from "react"
import { Link } from "gatsby"
import FoodSearchContent from '../components/projects/foodSearch/foodSearch'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const FoodSearch = () => (
  <Layout>
    <SEO title="Food Search" />
    <FoodSearchContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FoodSearch
