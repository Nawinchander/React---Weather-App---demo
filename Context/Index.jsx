import { useContext, createContext, useState, useEffect } from "react";

import axios from 'axios';

const stateContext = createContext()



export const StateContextProvider = ({children}) =>{

    const [weather, setWeather] = useState({})

    const [values, setValues] = useState([])

    const [place, setPlace] = useState('Jaipur')

    const [thisLocation, setLocation] = useState('')

    // fetch api

    const fetchWeather = () => {
        
        const options = {

            method: 'GET',

            url: 'https://visual-crossing-weather.p.rapidai.com/forecast',

            params: {
                aggregateHours: '24',

                location: place,

                contentType: 'json',

                unitGroup: 'metric',

                shortColumnNames: 0,
            },
            header: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,

                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }
    }

    try{

        const response = await axios.request(options)

        console.log(response.data)

        const thisData = object.values(response.data.locations)[0]

        setLocation(thisData.address)

        setValues(thisData.values)

        setWeather(thisData.values)


    }catch(e){

        console.log(e);

        // if api thorws error

        alert("This place does not exist")

    }

    useEffect(() => {

        // fetchWeather()

    },[place])


    useEffect(() => {

        console.log(values)

    },[values])

    return(

        <stateContext.Provider value={{

            weather,
            setPlace,
            values,
            thisLocation,
            place,
        }}>
            
            {children}

        </stateContext.Provider>
    )


}

export const useStateContext = () => useContext(stateContext)



