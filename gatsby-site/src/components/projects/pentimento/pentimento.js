import React from 'react'
import {Link} from 'gatsby'
import HeaderImg from '../../../images/projects/pentimento/pentimento-header.jpg'
import SectionImgOne from '../../../images/projects/pentimento/pentimento-section-1.jpg'
import SectionImgTwo from '../../../images/projects/pentimento/pentimento-section-2.jpg'

import '../style/projectPage.scss'


const Pentimento = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Pentimento</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Links</h2>
                  <p>
                   <a href= "https://pentimentostreet.herokuapp.com/" target= "blank">Live</a>, <a href= "https://github.com/Phantom-Blue/phantom-blue" target= "blank">Github</a>
                  </p>
                  <h2>Technologies</h2>
                  <p>Mapbox, React.js, Redux.js, Node.js, Express.js, Sequelize</p>
                </div>
              </div>
              <div>
                <div>
                  <p>I get to see some of the world’s best art on the streets of the neighborhood in New York. I live near Bushwick, where street art thrives. Unfortunately, street art can be up for a moment and lost forever. I worked with a team a Grace Hopper to create a web app to capture and map the best street art around the world.</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
           <div className = 'details-2'>
            <h2>Account management</h2>
            <p>Creating an account allows users to take photos and upload them to Pentimento. Those photos are then displayed on a map for Pentimento visitors to browse. Users can also edit/delete their uploaded photos.</p>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgTwo} alt = 'Site img' />
          </div>
          <div className = 'details-2'>
            <h2>Mapping your favorite artwork</h2>
            <p>I used Mapbox in conjunction with React.js to display all artworks on a map that is center in New York City coordinates. I added the view as a list functionality and gave users the ability to edit their artwork postings by updating or removing the posting.</p>
          </div>
          <div id = 'next-project-link-container'>
            <h3>Next Project</h3>
            <Link to= '/daisys-wine-shop'> Daisy&apos;s Wine Shop</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pentimento
