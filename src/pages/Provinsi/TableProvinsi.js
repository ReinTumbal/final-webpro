import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";


export default function BoxIndo(){
  const [dataPro, provinsiList] = useState([]);

   
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then(response => {
        provinsiList(response.data.data)
        
      })
      .catch(err => {
        console.log(err)
    })
    }, []);
console.log (dataPro)
return (
  <center>
<table border="10" className='table1'>
                <tr>
                    <th><center>No.</center></th>
                    <th><center>provinsi</center></th>
                    <th><center>Positif</center></th>
                    <th><center>Sembuh</center></th>
                    <th><center>Meninggal</center></th>
         
                </tr>
                 {dataPro.map((item, index) => {
                  return(
                      // <tr classNames="table">
                      <tr>
                      <td scope="row" key={item.fid}><center>{index + 1}.</center></td>
                     
                         <td> <center>{item.provinsi}</center></td>
                          <td><center><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></center></td>
                          <td><center><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></center></td>
                         <td><center><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></center></td>
                       </tr>
                 )
             })}
           </table>
           </center>
)
}
