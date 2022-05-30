import axios from "axios";
import React, { useContext, useEffect } from "react";

import "./App.css";
import Card from "./components/Card";
import DropDown from "./components/DropDown";
import Context from "./context/Context";
function App() {
  const ctx = useContext(Context);
  const {city, setWeather, weather} = ctx[0]
   const api_key = "71299899d2c0b3e4e109ff823a3f6c1d"
   console.log(city.name)
  useEffect(() => {
  const getWeather = () => {
   
    axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={current,minutely,hourly}&appid=${api_key}`)
    .then((res) => setWeather(res.data.daily))
  }
  getWeather()
  
  },[city,setWeather])


  return (
    <div className="App">
      <DropDown />
     { weather.map(item => <Card  item={item} />)}
    </div>
  );
}

export default App;
