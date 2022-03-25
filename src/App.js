import { useEffect, useState } from "react";
import { fetchData } from "./services/constants";
import './App.css';
import Input from "./components/Input";
import WeatherCard from "./components/WeatherCard";

function App(props) {
// 
//weatherData is where we store the response data from our api call.
  //value is where we keep track of what is being inserted into out input field.
  const [weatherData, setWeatherData] = useState({});
  const [value, setValue] = useState(" ");

  const handleGetWeather = ()=>{
    fetchData(value).then(res=>{
        setWeatherData(res) 
        console.log(value)
      })
  }

 
  //You will have to create functions that handle event changes
  //Also for submit changes as well

  // useEffect(()=> {
  //   setWeatherData({}) 
  //   // fetchData(value).then(res=>{
  //   //   setWeatherData(res) 
  //   //   // console.log(weatherData)
  //   // })
  // },[])
  return (
    <div className="App">

      {/* <Input value={}/> */}
      <div className="search"> 
             {/* Search bar, input form with button */}
             <label htmlFor="zipcode">zipcode</label>
                <input type="text" onChange={(e)=>setValue(e.target.value)
                
                }/>
                <button type="submit" onClick={handleGetWeather}>Submit</button>
        </div>
        <h2>weather Data for: {value} zipcode </h2>
      
      <WeatherCard data={weatherData}/> 
    </div>
  );
}

export default App;


