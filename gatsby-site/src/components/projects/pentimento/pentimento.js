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
                  <h2>Technologies</h2>
                  <p>Mapbox, React, Redux, Node, Express, Sequelize</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "https://github.com/Phantom-Blue/phantom-blue" target= "blank">Github</a>
                  <a href= "https://pentimentostreet.herokuapp.com/" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>I get to see some of the world’s best art on the streets of the neighborhood in New York. I live near Bushwick, where street art thrives. Unfortunately, street art can be up for a moment and lost forever. I worked with a team a Grace Hopper to create a web app to capture and map the best street art around the world.</p>
                  <p>I used Mapbox in conjunction with react.js to display all artworks on a map that is center in new york city coordinates. I additionally added the view as a list functionality and gave users the ability to edit their artwork postings by updating or removing the posting.</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div className = 'details-2'>
            <div><h2>How it works</h2></div>
            <div>
              <p> &#8212; Any user can see and search for artwork near them. </p>
              <p>&#8212; All users are able to create an account. </p>
              <p> &#8212; If they have an account they can add a posting of artwork. </p>
              <p> &#8212; They are also able to update their own artwork. </p>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgTwo} alt = 'Site img' />
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
