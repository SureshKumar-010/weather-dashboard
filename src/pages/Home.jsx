import clock from "../assets/icons/clock.png"
import Delete from "../assets/icons/delete.png"
import location from "../assets/icons/location.png"
import Sunrise from "../assets/icons/sunrise.png"
import Sunset from "../assets/icons/sunset.png"
import AQI from "../assets/icons/wind(1).png"
import Forecast from '../components/Forecast'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import "../styles/Home.css"


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className='left-main'>
          <div className='search_location'>
            <SearchBar/>
            <button className='location-btn'> <img src={location} className='location-img' /> Use My Location</button>
          </div>
          <WeatherCard className="home-weather-card" />
          <Forecast />
        </div>
        <div className="right-main">
          <div className="recent-search">
            <h3 className='recent-search-heading'>Recent Searches</h3>
            <div className="searches">
              <div className='searches-left'>
                <img src={clock} alt="clock" />
                <p>Hyderabad</p>
              </div>
              <button><img src={Delete} alt="Delete" /></button>
            </div>
            <div className="searches">
              <div className='searches-left'>
                <img src={clock} alt="clock" />
                <p>Hyderabad</p>
              </div>
              <button><img src={Delete} alt="Delete" /></button>
            </div>
            <div className="searches">
              <div className='searches-left'>
                <img src={clock} alt="clock" />
                <p>Hyderabad</p>
              </div>
              <button><img src={Delete} alt="Delete" /></button>
            </div>
            <div className="searches">
              <div className='searches-left'>
                <img src={clock} alt="clock" />
                <p>Hyderabad</p>
              </div>
              <button><img src={Delete} alt="Delete" /></button>
            </div>
            <div className="searches">
              <div className='searches-left'>
                <img src={clock} alt="clock" />
                <p>Hyderabad</p>
              </div>
              <button><img src={Delete} alt="Delete" /></button>
            </div>
          </div>
          <div className="additional-info">
            <h3>Additional info</h3>
            <div className="sunrise">
              <div className='sunrise-left'>
                <img src={Sunrise} alt="clock" />
                <p>Sunrise</p>
              </div>
              <p>5:45 AM</p>
            </div>
            <div className="sunset">
              <div className='sunset-left'>
                <img src={Sunset} alt="clock" />
                <p>Sunset</p>
              </div>
              <p>6:45 PM</p>
            </div>
            <div className="AQI">
              <div className='AQI-left'>
                <img src={AQI} alt="clock" />
                <p>AQI</p>
              </div>
              <p>42(Good)</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home