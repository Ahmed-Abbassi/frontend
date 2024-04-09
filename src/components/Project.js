import React from 'react'

function Project({image, technologies}) {
  return (
    <a href='https://mellifluous-caramel-db6396.netlify.app/'  className='project'>
            <img alt='' src={image} />
            <div className='aboutProject'>
              <h3>Chat App</h3>
              <p className='description'> e js and express Js. I excel in integrating responsive websites that offer a smooth user experience,engaging interfaces through writing clean and optimizes code and utilizing cutting-edge developpe this is the project description</p>
              <div className='techs'>
                {technologies.map((e, index)=>{
                    return(
                        <span className='aTech' key={index}>{e}</span>
                    )
                })}
              </div>
              <div className='consult'>
                <span className='toConsult'>code</span> 
                <span className='toConsult'>Live Demo</span>
              </div>
            </div>
          </a>
  )
}

export default Project
