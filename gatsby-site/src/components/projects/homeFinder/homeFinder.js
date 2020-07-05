import React from 'react'
import HeaderImg from '../../../images/projects/homeFinder/home-finder-1.jpg'
import SectionImgOne from '../../../images/projects/homeFinder/home-finder-2.jpg'

import '../style/projectPage.scss'


const homeFinder = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Home Finder</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p>React, Node, Express, MongoDB</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "https://github.com/AMSpears/home-app-frontend" target= "blank">Github</a>
                  <a href= "http://home-finder.surge.sh/" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>Home Finder was a project I worked on with a team at General Assembly. For this project, we wanted to explore databases and search. We created a database where realtors could add/store/edit profiles of homes. Then users can browse homes listed in the database.</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default homeFinder
