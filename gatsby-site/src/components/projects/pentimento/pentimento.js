import React from 'react'
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
                <div>
                  <h2>Technologies</h2>
                  <p>React,CSS</p>
                </div>
                <div>
                  <h2>Links</h2>
                  <a href= "#" target= "blank">Github</a>
                  <a href= "#" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div className = 'details-2'>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
           <div className = 'project-img'>
            <img src = {SectionImgTwo} alt = 'Site img' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pentimento
