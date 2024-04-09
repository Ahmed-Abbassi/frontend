import React from 'react'
function Header() {
  return (
    <div>
      <header >
        <h2>Ahmed.dev</h2>
        <div id='home' className="navList">
          <a  className={"navigation"} href='#home'  >Home</a>
          <a  className={"navigation"} href='#about'  >About</a>  
          <a  className={"navigation"} href='#projectsList' >Projects</a>
          <a  className={"navigation"} href='#contact'  >Contact</a>
          
        </div>
      </header>
    </div>
  )
}

export default Header
