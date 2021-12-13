import {useEffect, useState} from 'react';

const useCitiesList = () => {
    const [citiesInputValue, setCitiesInputValue] = useState(JSON.parse(localStorage.getItem('citiesInputValue')) || [])
    useEffect(() => {
        localStorage.setItem('citiesInputValue', JSON.stringify(citiesInputValue))
    }, [citiesInputValue])
return[citiesInputValue, setCitiesInputValue]
};
export default useCitiesList;