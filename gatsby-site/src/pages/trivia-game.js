import React from "react"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const TriviaGameContent = loadable(() => import('../components/projects/triviaGame/triviaGame'))

const TriviaGame = () => (
  <Layout>
    <SEO title="SFT samsung" />
    <TriviaGameContent/>
  </Layout>
)

export default TriviaGame
