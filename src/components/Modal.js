import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'
import {faXmarkCircle} from '@fortawesome/free-regular-svg-icons'
function Modal({children, identifier ,stateChange}){
  return (
    <div id={identifier} >
      <FontAwesomeIcon className='icon' icon={faCircleCheck} />
      <p>{children}</p>
      <FontAwesomeIcon  className='icon' icon={faXmarkCircle} onClick={()=>{stateChange('')}}/>
    </div>
  )
}

export default Modal
