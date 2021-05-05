import React from 'react';

export default function Weather({ clima }) {
    const { city, temperature, icon, description } = clima
    return (
        <div className="weather-report">
            <div className="city"><h2>{city}</h2></div>
            <div className="temp">{temperature}º</div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Clima"></img>
            <div className="description">{description}</div>
        </div>
    )
}