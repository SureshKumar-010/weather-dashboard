import "../styles/WeatherInfoCard.css"

const WeatherInfoCard = ({icon,label,value}) => {
    return (
        <div className='weather-property'>
            <img src={icon} alt="image" />
            <div className='weather-property-flex'>
                <p>{label}</p>
                <p><strong>{value}</strong></p>
            </div>
        </div>
    )
}

export default WeatherInfoCard