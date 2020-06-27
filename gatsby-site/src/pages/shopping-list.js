import React from "react"
import { Link } from "gatsby"
import ShoppingListContent from '../components/projects/shoppingList/shoppingList'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const ShoppingList = () => (
  <Layout>
    <SEO title="Shopping List" />
    <ShoppingListContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ShoppingList
