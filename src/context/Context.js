import React, {useState} from "react";
import cities from "../Json/cities_of_turkey.json"


const Context = React.createContext()  

export default Context

export const ContextProvider = (props) => {
    const[weather, setWeather] = useState([])
    const [city, setCity] = useState(cities[14])
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
    
    
      const values= [{
          city,
          setCity,
          days,
          cities,
          weather,
          setWeather
      }]
      
    return <Context.Provider value={values} >
        {props.children}
    </Context.Provider>
}