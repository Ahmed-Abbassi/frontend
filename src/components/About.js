import React from 'react'
import pcOnTable from '../images/pcOnTable.avif'
import manPc from '../images/manPc.png'
export default function About() {
  return (
    <div id='about' className='myInfos'>
          <div className='images'>
            <img src={pcOnTable} id='img1' />
            <img src={manPc} id='img2' />
          
          </div>
          <div className='textAbout'>
            <h4>About Me</h4>
            <h2>I'm a Front-end Developer </h2>
            <p>As a junior Front-end Developer, I posess an impressive arsenal of skills in <b>HTML</b>, <b>CSS</b>, <b>Javascript</b> , <b>React</b> , <b>chakra UI</b>, <b>Sass</b>, <b>Node js</b> and<b> express Js</b>. I excel in integrating responsive websites that offer a smooth user experience,engaging interfaces through writing clean and optimizes code and utilizing cutting-edge developpement tools and technisues. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications</p>
          </div>
        </div>
  )
}
