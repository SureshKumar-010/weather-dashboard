import React from 'react'
import "../styles/Forecast.css"
import Sunny from "../assets/icons/sun.png"
import Rainy from "../assets/icons/rain-drops.png"
import PartlyCloudy from "../assets/icons/partly-cloudy.png"
import Thunderstorm from "../assets/icons/rain.png"

const Forecast = () => {
  return (
    <div className='Forecast'>
      <h3 className='forcast-head'>5-Day Forecast</h3>
      <div className='days'>
        <div className='day'>
          <h4 className='forcast-day'>Mon</h4>
          <p className='forcast-date'>19 May</p>
          <img src={Sunny} alt="sun" />
          <p className='forcast-temp'><strong>33&deg;C</strong>/24&deg;C</p>
          <p className='forcast-status'>Sunny</p>
        </div>
        <div className='day'>
          <h4 className='forcast-day' >Tue</h4>
          <p className='forcast-date' >20 May</p>
          <img src={Rainy} alt="sun" />
          <p className='forcast-temp' ><strong>29&deg;C</strong>/24&deg;C</p>
          <p className='forcast-status'>Rainy</p>
        </div>
        <div className='day'>
          <h4 className='forcast-day' >Wed</h4>
          <p className='forcast-date' >21 May</p>
          <img src={PartlyCloudy} alt="sun" />
          <p className='forcast-temp'><strong>31&deg;C</strong>/24&deg;C</p>
          <p className='forcast-status'>Partly Cloudy</p>
        </div>
        <div className='day'>
          <h4 className='forcast-day' >Thu</h4>
          <p className='forcast-date'>22 May</p>
          <img src={Sunny} alt="sun" />
          <p className='forcast-temp' ><strong>34&deg;C</strong>/24&deg;C</p>
          <p className='forcast-status' >Sunny</p>
        </div>
        <div className='day'>
          <h4 className='forcast-day' >Fri</h4>
          <p className='forcast-date' >23 May</p>
          <img src={Thunderstorm} alt="sun" />
          <p className='forcast-temp' ><strong>30&deg;C</strong>/24&deg;C</p>
          <p className='forcast-status'>Thunderstorm</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast