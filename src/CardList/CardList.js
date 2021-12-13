import React from 'react';
import Card from "../Card/Card";

const CardList = (props) => {
    const {citiesInputValue} = props
    return (
        <div className='CardList'>
            {citiesInputValue.map(city => <Card city={city} key={city} />)}
        </div>
    );
};

export default CardList;