import React from 'react'
import image1 from "../images/i.jpg"
import html from "../images/html.webp"
import css from "../images/css.webp"
import chakra from "../images/chakra.jpg"
import sass from "../images/sass.jpg"
import js from "../images/js.jpg"
import react from "../images/reactjs.png"
import node from "../images/node-js.png"
import express from "../images/express.png"
function AboutMe() {
  return (
    <div className="aboutMe">
          <div className="presentationWithImage">
            <div className='textPresentation'>
              <h1>Front-End React Developer</h1>
              
              <p>Hi i'm Ahmed Abbassi. A passionate Front-end React Developer based in Monastir Tunisia</p>
            </div>
            <img src={image1} alt='my'/>

          </div>
          <div className='stackAndTechnos'>
            <h4 className='stack'>
              Tech Stack
            </h4>
            <div className='images'>
              <img alt='html' src={html} />
              <img alt='css' src={css} />
              <img alt='chakra' src={chakra} />
              <img alt='sass' src={sass} />
              <img alt='js' src={js}/>
              <img alt='react' src={react} />
              <img alt='node' src={node} />
              <img alt='express' src={express} />
            </div>
          </div>

        </div>
  )
}

export default AboutMe
