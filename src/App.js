import { useEffect, useState } from "react";
import { fetchData } from "./services/constants";
import './App.css';
import Input from "./components/Input";
import WeatherCard from "./components/WeatherCard";

function App() {
// 
//weatherData is where we store the response data from our api call.
  //value is where we keep track of what is being inserted into out input field.

 const [weatherData, setWeatherData] = useState({});
  const [value, setValue] = useState(" ");
  //You will have to create functions that handle event changes
  //Also for submit changes as well

  useEffect(()=> {
    fetchData().then(res=>{
      setWeatherData(res) 
      // console.log(weatherData)
    })
  },[])
  return (
    <div className="App">

      <Input/>
      {weatherData?<WeatherCard data={weatherData}/>: <p>loading</p>}
    </div>
  );
}

export default App;


