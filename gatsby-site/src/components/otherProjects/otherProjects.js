import React from 'react'
import './otherProjects.scss'
import AboveAllSecurity  from '../projects/images/projects/above-all-security.jpg'

const OtherProjects = () => {
  return (
    <div className = 'other-projects-container'>
      <h1>Other Projects</h1>
      <div className = 'projects-img-container'>
        <div className = 'other-projects'>
          <img src = {AboveAllSecurity} alt = 'project-name'/>
        </div>
        <div className = 'other-projects'>
          <img src = {AboveAllSecurity} alt = 'project-name'/>
        </div>
        <div className = 'other-projects'>
          <img src = {AboveAllSecurity} alt = 'project-name'/>
        </div>
        <div className = 'other-projects'>
          <img src = {AboveAllSecurity} alt = 'project-name'/>
        </div>
        <div className = 'other-projects'>
          <img src = {AboveAllSecurity} alt = 'project-name'/>
        </div>
        <div className = 'other-projects'>
          <img src = {AboveAllSecurity} alt = 'project-name'/>
        </div>
      </div>

    </div>
  )
}


export default OtherProjects
