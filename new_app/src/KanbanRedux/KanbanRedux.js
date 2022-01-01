import React from 'react';
import Board from "./Board";
import {connect} from "react-redux";
import {Container} from "reactstrap";
import {cardDeleteById} from "../Redux/actions";

const KanbanRedux = (props) => {
    const {cards, columns} = props

    return (
        <Container>
                <Board cards={cards} columns={columns} addCard={props.addCard} deleteCard={props.deleteCard}
                       moveDirection={props.moveDirection}/>
        </Container>
    );
};


const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
    deleteCard: (cardId) => dispatch(cardDeleteById(cardId)),
    moveDirection: (cardId, valueId) => dispatch({type: 'MOVE_DIRECTION', payload: cardId, value: valueId})
})
export default connect(mapStateToProps, mapDispatchToProps )(KanbanRedux);