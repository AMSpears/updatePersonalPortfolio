import React from "react"
import ShoppingListContent from '../components/projects/shoppingList/shoppingList'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const ShoppingList = () => (
  <Layout>
    <SEO title="Shopping List" />
    <ShoppingListContent/>
  </Layout>
)

export default ShoppingList
