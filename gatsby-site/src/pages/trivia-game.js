import React from "react"
import { Link } from "gatsby"
import TriviaGameContent from '../components/projects/triviaGame/triviaGame'
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const TriviaGame = () => (
  <Layout>
    <SEO title="SFT Sansumg" />
    <TriviaGameContent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TriviaGame
