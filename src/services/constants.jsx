import axios from "axios";
import { useEffect } from 'react'


export const fetchData = async (inputValue) => {

    const apikey = 'd3835f377785b54db06ce82e27916c50'
    // const inputValue = '22306'
    const base_url ='https://api.openweathermap.org/data/2.5/weather?zip='

    // axios.get(`${base_url}${inputValue},us&units=imperial&appid=${apikey}`)
    // .then((response)=>{
    //     const results = response.data.main;
    //     console.log(results)
    //     return  results
    // }) . catch((error)=>{
    //     console.log(error)
    // })

        try {
        let response = await axios.get(`${base_url}${inputValue},us&units=imperial&appid=${apikey}`);
        const results= response.data.main
        return results
        console.log(results);
        } catch (error) {
        console.log(error);
        }
 
  };
//   fetchData()




  