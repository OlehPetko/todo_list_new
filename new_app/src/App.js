import './App.css';
import {useState} from "react";
import Kanban from "./Kanban/Kanban";
import Counter from "./Counter/Counter";
import TicTacToe from "./TicTacToe/TicTacToe";
import CounterDifficul from "./Counter Difficul/CounterDifficul";
import {connect} from "react-redux";


function App(props) {
    const [openGame, setOpenGame] = useState('')
    const openApp = (game) => () => {
        setOpenGame(game)
    }
    console.log(props.cards)
    console.log(props.columns)

    return (
        <div className="App">
            <button type="button" className="btn btn-light" onClick={openApp('Memory Game')}>Memory Game</button>
            <button type="button" className="btn btn-light" onClick={openApp('Kanban')}>Kanban</button>
            <button type="button" className="btn btn-light" onClick={openApp('TicTacToe')}>TicTacToe</button>
            <button type="button" className="btn btn-light" onClick={openApp('Counter')}>Counter</button>
            <button type="button" className="btn btn-light" onClick={openApp('Counter Difficul')}>Counter Difficul
            </button>
            {openGame === 'Kanban' && <Kanban/>}
            {openGame === 'Counter' && <Counter/>}
            {openGame === 'TicTacToe' && <TicTacToe/>}
            {openGame === 'Counter Difficul' && <CounterDifficul/>}
            {props.columns.map(el => <div>{el.status}</div>)}
            {props.cards.map(el =>
                <div>
                    {el.name}
                    <button onClick={() => props.deleteCard(el._id)}>delete</button>
                </div>
            )}
            <button onClick={props.addCard}>add card</button>

        </div>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
