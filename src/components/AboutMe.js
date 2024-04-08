import React from 'react'
import image from "../images/i.jpg"
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
            <img src={image} alt='my Image'/>

          </div>
          <div className='stackAndTechnos'>
            <h4 className='stack'>
              Tech Stack
            </h4>
            <div className='images'>
              <img src={html} />
              <img src={css} />
              <img src={chakra} />
              <img src={sass} />
              <img src={js}/>
              <img src={react} />
              <img src={node} />
              <img src={express} />
            </div>
          </div>

        </div>
  )
}

export default AboutMe
