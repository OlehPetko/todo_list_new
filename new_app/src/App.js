import './App.css';
import {useState} from "react";
import Kanban from "./Kanban/Kanban";
import Counter from "./Counter/Counter";
import TicTacToe from "./TicTacToe/TicTacToe";


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
            {openGame === 'Kanban' && <Kanban />}
            {openGame === 'Counter' && <Counter />}
            {openGame === 'TicTacToe' && <TicTacToe />}
        </div>
    );
}

export default App;
