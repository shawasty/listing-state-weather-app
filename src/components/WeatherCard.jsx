import React from 'react';
import './WeatherCard.css';
const WeatherCard = (props) => {
   
    return (
        <div className='container'>
           <p><span>feels_like:</span>{props.data.feels_like}</p>
           <p><span>humidity:</span> {props.data.humidity}</p>
           <p><span>pressure:</span>{props.data.pressure}</p>
           <p><span>temp:</span>{props.data.temp}</p>
           <p><span>temp_max:</span>{props.data.temp_max}</p>
           <p><span>temp_min:</span>{props.data.temp_min}</p>

        </div>
    );
};

export default WeatherCard;