import React from 'react'
import {Link} from 'gatsby'
import HeaderImg from '../../../images/projects/frsVerizon/verizon-1.jpg'
import SectionImgOne from '../../../images/projects/frsVerizon/verizon-2.jpg'
import SectionImgTwo from '../../../images/projects/frsVerizon/verizon-3.jpg'

import '../style/projectPage.scss'


const FrsVerizon = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Verizon: First Responders</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p>React, Sass</p>
                </div>
              </div>
              <div>
                <div>
                  <p>I never thought I’d be part of a Super Bowl commercial. While at R/GA I worked on an awesome website for Verizon that honored first responders.</p>
                  <p>Verizon ran a series of commercials during the Super Bowl for people to show gratitude to first responders. I collaborated with other engineers, designers, and QA on this project.</p>
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
            <h3>Next Project</h3>
            <Link to= '/sft-sansumg'> Sansumg: Solve For Tomorrow </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FrsVerizon
