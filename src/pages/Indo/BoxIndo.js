import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";

export default function BoxIndo(){
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
   
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then(response => {
        console.log(response)
        setConfirmed(response.data.dirawat)
        setRecovered(response.data.sembuh)
        setDeaths(response.data.meninggal)
        
      })
      .catch(err => {
        console.log(err)
    })
    }, []);

return (
<div className="container">
  
  <h1 className="Box1">
  <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
  <p>Positif</p>
  </h1>
  <h1 className="Box2">
  <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
  <p>Deaths</p>
  </h1>
  <h1 className="Box3">
  <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
  <p>Recovered</p>
  </h1>
  
  </div>

)
}