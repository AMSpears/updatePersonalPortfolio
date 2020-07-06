import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ErrorPage from '../components/404/errorPage'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorPage/>
  </Layout>
)

export default NotFoundPage
