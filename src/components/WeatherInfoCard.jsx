import React from 'react'
import "../styles/WeatherInfoCard.css"

const WeatherInfoCard = ({icon,label,value,key}) => {
    return (
        <div className='weather-property' key={key}>
            <img src={icon} alt="image" />
            <div className='weather-property-flex'>
                <p>{label}</p>
                <p><strong>{value}</strong></p>
            </div>
        </div>
    )
}

export default WeatherInfoCard