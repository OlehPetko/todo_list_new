import './App.css';
import {useState} from "react";
import Kanban from "./Kanban/Kanban";
import Counter from "./Counter/Counter";
import TicTacToe from "./TicTacToe/TicTacToe";
import CounterDifficul from "./Counter Difficul/CounterDifficul";


function App() {
    const[openGame, setOpenGame] = useState('')
    const openApp = (game) => () => {
      setOpenGame(game)
    }

    return (
        <div className="App">
            <button type="button" className="btn btn-light" onClick={openApp('Memory Game')}>Memory Game</button>
            <button type="button" className="btn btn-light" onClick={openApp('Kanban')}>Kanban</button>
            <button type="button" className="btn btn-light" onClick={openApp('TicTacToe')}>TicTacToe</button>
            <button type="button" className="btn btn-light" onClick={openApp('Counter')}>Counter</button>
            <button type="button" className="btn btn-light" onClick={openApp('Counter Difficul')}>Counter Difficul</button>
            {openGame === 'Kanban' && <Kanban />}
            {openGame === 'Counter' && <Counter />}
            {openGame === 'TicTacToe' && <TicTacToe />}
            {openGame === 'Counter Difficul' && <CounterDifficul />}
        </div>
    );
}

export default App;
