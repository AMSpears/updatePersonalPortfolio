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
                  <h2>Links</h2>
                  <p><a href= "https://amspears.github.io/TriviaGame/" target= "blank">Live</a>, <a href= "https://github.com/AMSpears/TriviaGame/" target= "blank">Github</a></p>
                  <h2>Technologies</h2>
                  <p>JQuery</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Test your knowledge of state capitals with this fun quiz I designed and developed! This timed quiz presents users with states and ask them what the capital is. Scores are displayed once the quiz is over. This was one of the first coding projects I developed in my engineering journey.</p>
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
