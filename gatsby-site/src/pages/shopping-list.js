import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const ShoppingListContent = loadable(() => import('../components/projects/shoppingList/shoppingList'))

const ShoppingList = () => (
  <Layout>
    <SEO title="Shopping List" />
    <ShoppingListContent/>
  </Layout>
)

export default ShoppingList
