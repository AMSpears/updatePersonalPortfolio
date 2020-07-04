import React from 'react'
import HeaderImg from '../../../images/projects/daisyswineshop/daisys-wine-shop-header.jpg'
import SectionImgOne from '../../../images/projects/daisyswineshop/daisys-wine-shop-section.jpg'

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
                <div>
                  <h2>Technologies</h2>
                  <p id = 'tech-details'>React.js, Redux.js, Node.js, Express.js, Node.js, PSQL, Sequelize and other technologies.</p>
                </div>
                <div>
                  <h2>Links</h2>
                  <a href= "#" target= "blank">Github</a>
                  <a href= "#" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>Daisy’s Wine shop is an e-commerce site I worked on at Grace Hopper. I used react.js in conjunction with redux.js to both create components that display, add, edit, and delete our products while communicating to our server to appropriately update the database.</p>
                  <p>
                  I created an account management portal that included Google Oath authentication.
                  </p>
                  <p>
                  In addition to user-facing account management, I created a page for admins to manage their online wine store. Admins could view users and add/edit/remove wines in their store.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div className = 'details-2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DaisysWineShop
