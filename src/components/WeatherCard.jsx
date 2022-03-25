import React from 'react';

const WeatherCard = (props) => {
    console.log(props)
    return (
        <div>
           <p>{props.data.temp}</p>
        </div>
    );
};

export default WeatherCard;