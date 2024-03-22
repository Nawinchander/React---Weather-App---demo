// import React from 'react'

import { useEffect, useState } from "react"
import { useStateContext } from "../Context/Index"

import Clear from '../assets/Images/Clear.jpg'
import Fog from '../assets/Images/fog.png'
import Cloudy from '../assets/Images/Cloudy.jpg'
import Rainy from '../assets/Images/Rainy.jpg'
import snow from '../assets/Images/snow.jpg'
import Stormy from '../assets/Images/Stormy.jpg'
import Sunny from '../assets/Images/Sunny.jpg'

const BackgroundLayout = () => {

  const {weather} = useStateContext()

  const [image, setImage] = useState(Clear)


  useEffect(() => {

    if(weather.conditions){
      let imagesString = weather.conditions

      if(imagesString.toLowerCase().includes('clear')){
        setImage(Clear)
      }else if(imagesString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }else if(imagesString.toLowerCase().includes('rain' || imagesString.toLowerCase().includes('shower'))){
        setImage(Rainy)
      }else if(imagesString.toLowerCase().includes('snow')){
        setImage(snow)
      }else if(imagesString.toLowerCase().includes('fog')){
        setImage(Fog)
      }else if(imagesString.toLowerCase().includes('thunder'|| imagesString.toLowerCase().includes('strom'))){
        setImage(Stormy)
      }
    }

  }, [weather])

  <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />

  return (

    <div>BackgroundLayout</div>

  )
}

export default BackgroundLayout