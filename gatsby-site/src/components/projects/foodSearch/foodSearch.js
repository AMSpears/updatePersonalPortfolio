import React from 'react'
import HeaderImg from '../../../images/projects/foodSearch/food-search-1.jpg'
import SectionImgOne from '../../../images/projects/foodSearch/food-search-2.jpg'

import '../style/projectPage.scss'


const FoodSearch = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Food Search</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Links</h2>
                  <p>
                    <a href= "www.food-searches.surge.sh/" target= "blank">Live</a>, <a href= "https://github.com/AMSpears/FoodSearch-Frontend" target= "blank">Github</a>
                  </p>
                  <h2>Technologies</h2>
                  <p>Yelp API, React, Node, Express</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Who doesn&apos;t love food? But how tough is it to find new places to eat? I&apos;m an avid Yelp user and decided to create a spin-off search list using the Yelp API. Users can look up restaurants based on category and location.</p>
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

export default FoodSearch
