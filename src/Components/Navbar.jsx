import React from 'react'
import "../styles/Navbar.css"
import appLogo from "../assets/icons/weather.png"
import toogle from "../assets/icons/sun.png"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="left-div">
        <img src={appLogo} alt="" className='appLogo' />
        <h2>Weather Dashboard</h2>
      </div>
      <div className="right-div">
        
        <button><img src={toogle} alt="logo" /></button>

      </div>
    </div>
  )
}

export default Navbar