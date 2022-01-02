import React from 'react';
import {Card, CardBody, CardFooter, CardSubtitle, CardTitle, Button} from "reactstrap";

const CardItem = (props) => {
    const {card, deleteCard, moveDirection, column} = props
    const {name, priority, _id, status} = card

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardSubtitle>
                    {priority}
                </CardSubtitle>
                <CardFooter>
                    <Button onClick={() => deleteCard(_id)}>delete</Button>
                    {status !== 'todo' && <Button>Left</Button>}
                    {status !== 'done' && <Button onClick={() => moveDirection(card, column)}>Right</Button>}
                </CardFooter>
            </CardBody>
        </Card>
    );
};


export default CardItem;