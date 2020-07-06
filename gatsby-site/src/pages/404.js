import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const ErrorPage = loadable(() => import('../components/404/ErrorPage'))

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorPage/>
  </Layout>
)

export default NotFoundPage
