import React, {useEffect, useState, useRef} from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Intro from '../components/about/intro'
import About from '../components/about/about'
import Projects from '../components/projects/projects.js'
import Articles from '../components/articles/articles'
import OtherProjects from '../components/otherProjects/otherProjects'

const mainSectionStyle = {
  margin: '0',
  backgroundColor: 'white',
  backgroundImage: 'linear-gradient(180deg, #ffffff 80%, red 100%)',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100%'
}
const HomePage = () => {
   const mainContainer = useRef()
  // Referenced this https://stackoverflow.com/questions/57453141/using-react-hooks-to-update-w-scroll
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(20)

  useEffect( (e) => {
    const onScroll = (e) => {
      // Define random color
      const colors = ['#F76259', '#92F759', '#59F7E5', '#5985F7', '#DF5FFA']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]

      // Update backgroun img color
      // if (window.pageYOffset > 800) {

        // mainContainer.current.style.backgroundImage = `linear-gradient(180deg, #ffffff 70%, ${randomColor} 100%)`

      // }
      // console.log(window.pageYOffset)
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
      <div style = {mainSectionStyle } in={scrolling ? 1 : 0} ref= {mainContainer}>
        <About/>
        <Projects/>
        <Articles/>
        <OtherProjects/>
      </div>
    </Layout>
  )
}

export default HomePage
