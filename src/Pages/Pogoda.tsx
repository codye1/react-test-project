import React, { useEffect, useState } from 'react';
import Iframe from 'react-iframe'
import PostService from '../API';
import MyInput from '../UI/MyInput/MyInput';
import axios from "axios";
import MyLoader from '../UI/MyLoader/MyLoader';

export interface weather{
  data: {
    coord: {
      lon: number
      lat: number
    },
    weather: [
      {
        id: number
        main: string,
        description: string,
        icon: string
      }
    ],
    base: string,
    main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number,
      sea_level: number,
      grnd_level: number
    },
    visibility: number,
    wind: {
      speed: number,
      deg: number,
      gust: number
    },
    rain: {
      h: number
    },
    clouds: {
      all: number
    },
    dt: number,
    sys: {
      type: number,
      id: number,
      country: string,
      sunrise: number,
      sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
  }

  }

interface pogoda{
  data: any;

}

export const Pogoda = () => {

    const [pogoda,setPogoda]= useState<pogoda>()
    const [city,setCity]=useState()
    const [cityl,setcityl]=useState('Париж')
    const [lat,setLat]=useState()
    const [lon,setLon]=useState()

    const fetchCord = async (city:string,code:string)=>{
      const responses = await PostService.getCord(city,code)
      fetchPogoda((responses.data[0].lat),(responses.data[0].lon))
      setLat(responses.data[0].lat)
      setLon(responses.data[0].lon)
      setCity(responses.data[0].name)
      return responses
  }

  const fetchPogoda= async (lat:number,lon:number)=>{
      const response = await PostService.getPogoda(lat,lon)
      setPogoda(response)


  }


  useEffect(()=>{
      fetchCord(cityl,'804')
  },[cityl])


    if(pogoda != undefined){
        return (
            <div>

        <Iframe url={`https://api.maptiler.com/maps/basic-v2/?key=XyT8E9T7XeDwpsq9fbbX#7/${lat}/${lon}`}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative" />
                <MyInput
                    value={cityl}
                    type='text'
                    placeholder='Введите город'
                    onChange={e=>setcityl(e.target.value)}
                ></MyInput>
                <h1>Погода в {city}</h1>
                <h1>Температура: {Math.round(pogoda.data.main.temp )}°C</h1>
                <h1>Описание погоды: {pogoda.data.weather[0].description}</h1>
            </div>
        );
    }else{
      return(<MyLoader/>)
    }


};