import React from 'react'
import HeaderImg from '../../../images/projects/triviaGame/trivia-game-1.jpg'
import SectionImgOne from '../../../images/projects/triviaGame/trivia-game-2.jpg'

import '../style/projectPage.scss'

const TriviaGame = () => {
  return (
       <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Trivia Game</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p>JQuery</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "https://github.com/AMSpears/TriviaGame/" target= "blank">Github</a>
                  <a href= "https://amspears.github.io/TriviaGame/" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>U.S. State Capitals is a trivia game I created while at General Assembly. For this project, I create a fun and interactive quiz that allows the user to test their knowledge of the state capitals within 50 seconds.</p>
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

export default TriviaGame
