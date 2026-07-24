import Pressure from "../assets/icons/hot.png"
import Humidity from "../assets/icons/humidity.png"
import partlyCloudy from "../assets/icons/partly-cloudy.png"
import Precipitation from "../assets/icons/precipitation.png"
import Visibility from "../assets/icons/visible.png"
import Wind from "../assets/icons/wind.png"
import "../styles/WeatherCard.css"
import WeatherInfoCard from "./WeatherInfoCard"

const WeatherCard = () => {
  const weather = {
  humidity: 65,
  wind: 12,
  pressure: 1012,
  visibility: 10,
};
  const weatherDetails = [
    {
      label: "Humidity",
      icon: Humidity,
      value: `${weather.humidity}%`
    },
    {
      label: "Wind",
      icon: Wind,
      value: `${weather.wind} km/h`
    },
    {
      label: "Pressure",
      icon: Pressure,
      value: `${weather.pressure} hPa`
    },
    {
      label: "Visibility",
      icon: Visibility,
      value: `${weather.visibility} Km`
    },
    {
      label: "Precipitation",
      icon: Precipitation,
      value: "0 mm"
    }
  ]
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
        {
          weatherDetails.map((item) => (
            <WeatherInfoCard 
            key={item.label}
            icon={item.icon}
            label = {item.label}
            value = {item.value}
            />
          ))
        }
      </div>
    </div>
  )
}

export default WeatherCard