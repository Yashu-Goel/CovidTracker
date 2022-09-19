import './Mediator.css'
import React, { useState,useEffect } from "react";
import DisplayCovidData from './DisplayCovidData';

function Mediator(props){
    let [CovidData, setCovidData]=useState('');
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        setCovidData(data);

      }).catch(err => console.log(err,"1212"));
  },[]);
    
    console.log(props.item);
    const x=props.item;

    const callFunction=()=>
    {
      
    }
    return (  
        <div>
          {
            CovidData && CovidData.Countries?.map(buffer => (     // && => conditional rendering karte hai
              (buffer.Country===props.item) ?  
              <DisplayCovidData
                  Country={buffer.Country}
                  TotalConfirmed={buffer.TotalConfirmed}
                  TotalDeaths={buffer.TotalDeaths}
                  TotalRecovered={buffer.TotalRecovered}
                  /> : console.log("Position not found")
              // console.log(buffer)
            ))
          }     
        </div>
    )
}

export default Mediator;