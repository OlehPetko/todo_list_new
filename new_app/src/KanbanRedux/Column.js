import React from 'react';
import CardItem from "./CardItem";
import {Col} from "reactstrap";

const Column = (props) => {
    const {column, cards, deleteCard, moveDirection} = props
    return (

        <Col>
            <h3>
                {column.status}
            </h3>
            {cards.filter(card => card.status === column.status)
                .map(card => <CardItem key={card._id} column={column} card={card} deleteCard={deleteCard} moveDirection={moveDirection}/>)}
        </Col>


    );
};

export default Column;