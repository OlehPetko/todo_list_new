import React, {useEffect, useState} from 'react';
import {API_KEY} from "../settings";

const useWeather = (city) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(setData)
            .catch(error => console.log(error))
    }, [city])

    return data
};

export default useWeather;