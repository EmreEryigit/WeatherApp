import React, {useContext} from "react";
import Context from "../context/Context";
function Card(props) {
    const ctx = useContext(Context);
    const {days} = ctx[0]

    function timeConverter(UNIX_timestamp){
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
     
        let month = months[a.getMonth()];
        let date = a.getDate();
        let day = (Math.floor(UNIX_timestamp / 86400) + 4)%7
        let gün = days[day].substring(0,3)
        let time = date + ' ' + month + " " + gün
        
        return time
      }
  
      const cels = (F) => {
        return Math.round((F - 273)) + " °C";
      }
      const todayConv = (UNIX_timestamp) => {
        let a = new Date(UNIX_timestamp * 1000);
        
        let year = a.getFullYear();
        let month = a.getMonth()
        let date = a.getDate();
        let time = date +"."+month+"."+year
        return time
      }
      let today = false
      if(todayConv(Math.round(+new Date()/ 1000)) === todayConv(props.item.dt)) {
        today = true
        console.log(today)
      }
      
    
      
      
  return (
    <div  className={`my-2 mx-3  d-inline-block shadow-lg `} >
      <div className={`card ${today ? "bugun" : undefined}`} style={{width: "15rem"}}>
      <h5 className="card-title text-align-center">{timeConverter(props.item.dt)}</h5>

      
      
        <img src={`http://openweathermap.org/img/wn/${props.item.weather[0].icon}@2x.png`} className="card-img" alt="..." style={{width: "80px", alignContent: "center"}}/>
        <div className="card-body">
          <p className="card-text">
            
          </p>
          <div className="card-footer bg-transparent border-success">
          <p className="card-text">Day: {cels(props.item.temp.day)}</p>
          <p className="card-text text-muted">Night: {cels(props.item.temp.night)}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
