import React from 'react'
import {Link} from 'gatsby'
import HeaderImg from '../../../images/projects/shoppingList/shopping-list-1.jpg'
import SectionImgOne from '../../../images/projects/shoppingList/shopping-list-2.jpg'

import '../style/projectPage.scss'


const ShoppingList = () => {
  return (
       <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Shopping List</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Links</h2>
                  <p> <a href= "https://as-shopping-list.herokuapp.com/users/sign_in" target= "blank">Live</a>, <a href= "https://github.com/AMSpears/shoppinglist" target= "blank">Github</a></p>
                  <h2>Technologies</h2>
                  <p>Ruby on Rails</p>
                </div>
              </div>
              <div>
                <div>
                  <p>This shopping list was one of my first projects I created a few years ago. I worked closely with a UX designer to create a fun and interactive shopping list app. Users can add/delete/update a list of anything.</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div id = 'next-project-link-container'>
            <h3>Next Project</h3>
            <Link to= '/weather-app'> Weather App </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShoppingList
