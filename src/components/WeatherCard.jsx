import React from 'react';

const WeatherCard = (props) => {
   
    return (
        <div>
           <p>{props.data.feels_like}</p>
           <p>{props.data.humidity}</p>
           <p>{props.data.pressure}</p>
           <p>{props.data.temp}</p>

        </div>
    );
};

export default WeatherCard;