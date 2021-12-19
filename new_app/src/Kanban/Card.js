import React from 'react';
import Task from "./Task";



const Card = (props) => {
    const {column, cards} = props
    return (
        <div className='col'>

            <h2>
                {column.status}
            </h2>
                <div>
                    {cards.filter(card => card.status === column.status).map(card =>
                        <Task key={card._id} card={card}/>
                    )}

                </div>
        </div>

    );
};

export default Card;