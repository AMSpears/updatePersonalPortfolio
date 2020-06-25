import React from 'react'
import './otherProjects.scss'
import AboveAllSecurity  from '../projects/images/projects/above-all-tb.jpg'

const OtherProjects = () => {
  return (
    <div className = 'other-projects-section-container'>
      <div>
        <h1>Other Projects</h1>
        <div className = 'other-projects-container'>
          <div className = 'other-projects'>
            <img  className = 'project-img even' src = {AboveAllSecurity} alt = 'project-name'/>
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img odd' src = {AboveAllSecurity} alt = 'project-name'  />
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img even' src = {AboveAllSecurity} alt = 'project-name'/>
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img odd' src = {AboveAllSecurity} alt = 'project-name'/>
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img even' src = {AboveAllSecurity} alt = 'project-name'/>
          </div>
          <div className = 'other-projects'>
            <img className = 'project-img odd' src = {AboveAllSecurity} alt = 'project-name'/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default OtherProjects
