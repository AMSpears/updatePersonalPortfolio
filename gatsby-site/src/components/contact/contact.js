import React from 'react'
import './contact.scss'


const Contact = () => {
  return (
    <div className = 'contact-container'>
      <h1>Thanks for visiting</h1>
      <div className = 'contact-links-container'>
        <div className = 'contact-link'>
          <a href = 'mailto:hello@angiespears.com' target = '_blank'>Contact Me</a>
        </div>
        <div className = 'contact-link'>
          <a href = 'mailto:hello@angiespears.com' target = '_blank'>Email</a>
        </div>
        <div className = 'contact-link'>
          <a href = 'https://www.linkedin.com/in/angiespears/' target = '_blank'>LinkedIn</a>
        </div>
        <div className = 'contact-link'>
          <a href = 'https://www.instagram.com/angiespears_/' target = '_blank'>Instagram</a>
        </div>
        <div className = 'contact-link'>
          <a href = 'https://twitter.com/AngieSpears_' target = '_blank'>Twitter</a>
        </div>
      </div>

    </div>
  )
}

export default Contact
