import React from 'react'
import {Link} from 'gatsby'
import HeaderImg from '../../../images/projects/daisyswineshop/daisys-wine-shop-header.jpg'
import SectionImgOne from '../../../images/projects/daisyswineshop/daisys-wine-shop-section.jpg'
import SectionImgTwo from '../../../images/projects/daisyswineshop/daisys-wine-shop-003.jpg'

import '../style/projectPage.scss'


const DaisysWineShop = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Daisy&apos;s Wine Shop</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p id ='tech-list'>React,Redux, Node, Express, Sequelize</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "https://github.com/grace-shopper-daisys-dominators/daisys-dominators" target= "blank">Github</a>
                  <a href= "https://daisys-wine-shop.herokuapp.com/" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>Daisy’s Wine shop is an e-commerce site I worked on at Grace Hopper. I used react.js in conjunction with redux.js to both create components that display, add, edit, and delete our products while communicating to our server to appropriately update the database.</p>
                  <p>I created an account management portal that included Google Oath authentication. In addition to user-facing account management, I created a page for admins to manage their online wine store. Admins could view users and add/edit/remove wines in their store.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div className = 'details-2'>
            <h2>How does it work?</h2>
            <p>Any user is able to view the products and add products to their cart. Only users with an account are able to proceed in the checkout process.
            </p>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgTwo} alt = 'Site img' />
          </div>
          <div id = 'next-project-link-container'>
            <h3>Next Project</h3>
            <Link to= '/above-all-security'> Above All Security </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DaisysWineShop
