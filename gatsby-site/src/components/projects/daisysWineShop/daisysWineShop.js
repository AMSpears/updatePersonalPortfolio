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
                  <h2>Links</h2>
                  <p><a href= "https://daisys-wine-shop.herokuapp.com/" target= "blank">Live</a>, <a href= "https://github.com/grace-shopper-daisys-dominators/daisys-dominators" target= "blank">Github</a></p>

                  <h2>Technologies</h2>
                  <p id ='tech-list'>React.js, Redux.js, Node.js, Express.js, Sequelize</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Daisy&apos;s Wine shop is an e-commerce site I worked on at Grace Hopper. I used react.js in conjunction with redux.js to create components that display, add, edit, and delete our products while communicating to our server to update the database appropriately.</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div className = 'details-2'>
            <h2>Navigating the shop</h2>
            <p>Any user can view the products and add products to their cart. Only users with an account can proceed in the checkout process. <br/><br/>An e-commerce wine shop site.<br/> Implemented the functionality and style of various components of the site such as single product view, add, edit and delete a product, navigation bar, users view, and more. </p>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgTwo} alt = 'Site img' />
          </div>
           <div className = 'details-2'>
            <h2>Managing your wine shop</h2>
            <p>I created an account management portal that included Google Oath authentication. In addition to user-facing account management, I created a page for admins to manage their online wine store. Admins could view users and add/edit/remove wines in their stores.</p>
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
