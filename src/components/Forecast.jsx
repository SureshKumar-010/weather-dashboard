import PartlyCloudy from "../assets/icons/partly-cloudy.png"
import Rainy from "../assets/icons/rain-drops.png"
import Thunderstorm from "../assets/icons/rain.png"
import Sunny from "../assets/icons/sun.png"
import "../styles/Forecast.css"

const Forecast = () => {
  const days = [
    {
      day: "Mon",
      date: "19 May",
      icon: Sunny,
      deg: "30°C",
      status: "Sunny"
    },
    {
      day: "Tue",
      date: "20 May",
      icon: Rainy,
      deg: "29°C",
      status: "Rainy"
    },
    {
      day: "Wed",
      date: "21 May",
      icon: PartlyCloudy,
      deg: "31°C",
      status: "Partly Cloudy"
    },
    {
      day: "Thu",
      date: "22 May",
      icon: Sunny,
      deg: "34°C",
      status: "Sunny"
    },
    {
      day: "Fri",
      date: "23 May",
      icon: Thunderstorm,
      deg: "30°C",
      status: "Thunderstorm"
    }
  ]
  return (
    <div className='Forecast'>
      <h3 className='forcast-head'>5-Day Forecast</h3>
      <div className='days'>
        {
          days.map((day,index) => (
              <div className='day' key={index}>
                <h4 className='forcast-day'>{day.day}</h4>
                <p className='forcast-date'>{day.date}</p>
                <img src={day.icon} alt="sun" />
                <p className='forcast-temp'><strong>{day.deg}</strong></p>
                <p className='forcast-status'>{day.status}</p>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Forecast