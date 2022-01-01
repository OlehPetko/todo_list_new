import React from 'react';
import {Card, CardBody, CardFooter, CardSubtitle, CardTitle, Button} from "reactstrap";

const CardItem = (props) => {
    const {card, deleteCard, moveDirection} = props
    const {name, priority, _id} = card
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
                    {card.status !== 'todo' && <Button onClick={() => moveDirection(_id, -1)}>Left</Button>}
                    {card.status !== 'done' && <Button onClick={() => moveDirection(_id, 1)}>Right</Button>}
                </CardFooter>
            </CardBody>
        </Card>
    );
};


export default CardItem;