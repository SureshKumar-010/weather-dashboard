import React from 'react'
import partlyCloudy from "../assets/icons/partly-cloudy.png"
import Humidity from "../assets/icons/humidity.png"
import Wind from "../assets/icons/wind.png"
import Pressure from "../assets/icons/hot.png"
import Visibility from "../assets/icons/visible.png"
import Precipitation from "../assets/icons/precipitation.png"
import "../styles/WeatherCard.css"

const WeatherCard = () => {
  return (
    <div className='weather-card'>
      <div className="city-weather">
        <div className='city-weather-left'>
          <h2 className='city-name'>Hyderabad, IN</h2>
          <p className='city-date'>Sunday,18 May 2025 | 10:30 AM</p>
          <p className='degrees'>32&deg;C</p>
          <p className='weather-status'>Partly Cloudy</p>
          <p className='city-feels'>Feels like 35&deg;C</p>
        </div>
        <div className='city-weather-right'>
          <img src={partlyCloudy} alt="" />
        </div>
      </div>
      <div className="weather-properties">
        <div className='weather-property'>
          <img src={Humidity} alt="image" />
          <div className='weather-property-flex'>
            <p>Humidity</p>
            <p>52%</p>
          </div>
        </div>
        <div className='weather-property'>
          <img src={Wind} alt="image" />
          <div className='weather-property-flex'>
            <p>Wind</p>
            <p>10 km/h</p>
          </div>
        </div>
        <div className='weather-property'>
          <img src={Pressure} alt="image" />
          <div className='weather-property-flex'>
            <p>Pressure</p>
            <p>1012 hPa</p>
          </div>
        </div>
        <div className='weather-property'>
          <img src={Visibility} alt="image" />
          <div className='weather-property-flex'>
            <p>Visibility</p>
            <p>8 km</p>
          </div>
        </div>
        <div className='weather-property'>
          <img src={Precipitation} alt="image" />
          <div className='weather-property-flex'>
            <p>Precipitation</p>
            <p>0 mm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard