import React, {useEffect} from 'react';
import Board from "./Board";
import {connect} from "react-redux";
import {Container} from "reactstrap";
import {addCard, cardDeleteById, getCards, moveDirection} from "../Redux/actions";

const KanbanRedux = (props) => {
    useEffect(() => {
        props.getCards()
    }, [])

    const addCardHandler = () => {
        const newCard = {name: 'Liverpool', status: 'todo', priority: 1}
        props.addCard(newCard)
    }

    const {cards, columns} = props
    return (
        <Container>
            <Board cards={cards} columns={columns} deleteCard={props.deleteCard}
                   moveDirection={props.moveDirection} addCardHandler={addCardHandler}/>
        </Container>
    );
};


const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    addCard: (card) => dispatch(addCard(card)),
    getCards: () => dispatch(getCards()),
    deleteCard: (cardId) => dispatch(cardDeleteById(cardId)),
    moveDirection: (card, columns) => dispatch(moveDirection(card, columns))
})
export default connect(mapStateToProps, mapDispatchToProps)(KanbanRedux);