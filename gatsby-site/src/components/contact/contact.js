import React from 'react'
import './contact.scss'


const Contact = () => {
  return (
    <div className = 'contact-container'>
      <h1>Thanks for visiting</h1>
      <div className = 'contact-links-container'>
        <div className = 'contact-link'>
          <a href = '#' target = '_blank'>Contact Me</a>
        </div>
        <div className = 'contact-link'>
          <a href = '#' target = '_blank'>Email</a>
        </div>
        <div className = 'contact-link'>
          <a href = '#' target = '_blank'>Linkedin</a>
        </div>
        <div className = 'contact-link'>
          <a href = '#' target = '_blank'>Instagram</a>
        </div>
        <div className = 'contact-link'>
          <a href = '#' target = '_blank'>Twitter</a>
        </div>
      </div>

    </div>
  )
}

export default Contact
