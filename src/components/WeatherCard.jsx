import React from 'react';
import './WeatherCard.css';
const WeatherCard = (props) => {
   
    return (
        <div className='container'>
           <p><span>feels like:</span>{props.data.feels_like} ºC</p>
           <p><span>humidity:</span> {props.data.humidity} RH</p>
           <p><span>pressure:</span>{props.data.pressure} p</p>
           <p><span>temp:</span>{props.data.temp} ºC</p>
           <p><span>max temp:</span>{props.data.temp_max} ºC</p>
           <p><span>min temp:</span>{props.data.temp_min} ºC</p>

        </div>
    );
};

export default WeatherCard;