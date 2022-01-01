import React from 'react';
import Column from "./Column";
import {Row, Button, Input} from "reactstrap";


const Board = (props) => {

    const {cards, columns, addCard, deleteCard, moveDirection} = props
    return (
        <div>
            <Input/>
            <Button onClick={addCard}>add card</Button>
            <Row>
                {columns.map(column => <Column key={column._id} column={column} cards={cards} deleteCard={deleteCard}
                                               moveDirection={moveDirection}/>)}
            </Row>
        </div>
    )

}


export default Board;