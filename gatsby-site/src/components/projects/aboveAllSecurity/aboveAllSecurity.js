import React from 'react'
import HeaderImg from '../images/projects/aboveAllSecurity/above-all-security1.jpg'
import ProjectImg from '../images/projects/aboveAllSecurity/above-all-security2.jpg'

import '../style/projectPage.scss'


const AboveAllSecurity = () => {
  return (
    <div>
      <section className = 'img-placeholder'>
       <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'about'>
        <p><strong>Above All Security</strong> is a small security firm based in Washington, DC.  I designed and developed this site for the client to communicate their services and allow their current and new clients to be able to connect with them.</p>
        </section>
      <section className = 'project-img'>
        <img src = {ProjectImg} alt = 'project-img' />
      </section>
      <section className = 'about'>
        <p>Some technologies used to develop this website are (client side) ReactJs, HTML5, CSS3, and (server side) NodeJs.  The backend portion of the site enables the contact form to allow the company to received direct emails from customers.</p>
      </section>
      <section className = 'projects-links-container'>
        <div className= "links"> <a href= "https://www.aboveall-security.com/" target= "blank">Website</a></div>
        <div className= "links"><a href= "https://github.com/AMSpears/above-all-security" target= "blank">Github</a></div>
      </section>
    </div>
  )
}

export default AboveAllSecurity
