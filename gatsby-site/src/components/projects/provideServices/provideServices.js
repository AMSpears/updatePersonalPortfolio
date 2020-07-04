import React from 'react'
import {Link} from 'gatsby'
import HeaderImg from '../../../images/projects/provideServices/provide-services-header.jpg'
import SectionImgOne from '../../../images/projects/provideServices/provide-services-section-1.jpg'
import SectionImgTwo from '../../../images/projects/provideServices/provide-services-section-2.jpg'

import '../style/projectPage.scss'


const ProvideServices = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Provide Services</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p>React, Node, Express, Nodemailer</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "https://github.com/AMSpears/provide-services" target= "blank">Github</a>
                  <a href= "https://provide.services/" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>Provide Technologies is a cryptocurrency startup. I worked with Provide to create a responsive website that would communicate their vision and value to customers.</p>
                  <p>Working on this site was rewarding. The startup was under a tight deadline to launch their initial website so I needed to deliver a responsive website fast. I got it done faster than I expected :)</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgTwo} alt = 'Site img' />
          </div>
          <div id = 'next-project-link-container'>
            <Link to= '/above-all-security'> Previews project</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProvideServices
