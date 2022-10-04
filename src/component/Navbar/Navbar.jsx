import React, { useState } from 'react'
import {CgMenuGridO} from 'react-icons/cg'
import {MdClose} from 'react-icons/md'
import './navbar.css'
import Logo from '../../assets/luxistt-logo.png'

const Navbar = () => {

  const [shadow, setShadow] = useState(false)
  const addShadow = () => {
    if(window.scrollY >= 90){
      setShadow(true)
    }else{
      setShadow(false)
    }
  }
  window.addEventListener('scroll', addShadow)

  const [click, setClick] = useState(false)
  const handleMenuOpen = () => setClick(true)
  const handleMenuClose = () => setClick(false)


  return (
    <nav>
      <div className="nav-container">
        <div className="main-nav">
          <div className="logo">
            <img width="180px" src={Logo}/>
          </div>
          <div className="menu-icon" onClick={handleMenuOpen}>
            <CgMenuGridO cursor="pointer" fontSize="30px" />
          </div>
        </div>
      </div>
      <div className={click ? "mobile-menu open" : "mobile-menu close"}>
          <div className="menu-list">
            <div className='cls-btn' onClick={handleMenuClose}><MdClose/></div>
          </div>
      </div>
  
    </nav>
  )
}

export default Navbar