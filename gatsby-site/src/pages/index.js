import React, {useEffect, useState, useRef} from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Intro from '../components/about/intro'
import About from '../components/about/about'
import Projects from '../components/projects/projects'
import Articles from '../components/articles/articles'
import OtherProjects from '../components/otherProjects/otherProjects'

const mainSectionStyle = {
  margin: '0',
  backgroundColor: 'white',
  // backgroundImage: 'linear-gradient(180deg, #ffffff 80%, red 100%)',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100%',
  transition:'0.3s all'

}

// exploring the idea of changing color per section
const HomePage = () => {
  const mainContainer = useRef()
  const aboutContainer = useRef()
  const projectsContainer = useRef()
  const articlesContainer = useRef()
  const otherProjectsContainer = useRef()
  // Referenced this https://stackoverflow.com/questions/57453141/using-react-hooks-to-update-w-scroll
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect( () => {
    const onScroll = (e) => {
      // '#EEA4F9', '#F7D6AC', '#E4FCCC', '#A7D7FA'

      if (scrollTop >= aboutContainer.current.getBoundingClientRect().top) {
        mainContainer.current.style.backgroundImage = 'linear-gradient(10deg, rgba(238, 164, 249,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%)'
      }

      if (scrollTop > projectsContainer.current.getBoundingClientRect().top) {
        mainContainer.current.style.backgroundImage = 'linear-gradient(10deg, rgba(247, 214, 172,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%)'
      }

      // Temporarily disable until additional articles are added to the section
      // if (scrollTop > articlesContainer.current.getBoundingClientRect().top) {
      // mainContainer.current.style.backgroundImage = 'linear-gradient(10deg, rgba(167, 215, 250,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%)'
      // }

      if (scrollTop > otherProjectsContainer.current.getBoundingClientRect().top) {
        mainContainer.current.style.backgroundImage = 'linear-gradient(10deg, rgba(228, 252, 204,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%)'
      }

      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > scrollTop)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

   return (
    <Layout>
      <SEO title="Home" />
      <Intro/>
      <div  style = {mainSectionStyle} in={scrolling ? 1 : 0} ref= {mainContainer}>
        <div ref = {aboutContainer}><About/></div>
        <div ref = {projectsContainer}><Projects/></div>
        <div ref = {articlesContainer}><Articles/></div>
        <div ref = {otherProjectsContainer}><OtherProjects/></div>
      </div>
    </Layout>
  )
}

export default HomePage
