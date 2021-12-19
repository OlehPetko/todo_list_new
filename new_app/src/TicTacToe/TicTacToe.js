import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Board from "./Board";

const TicTacToe = () => {

    const initialBoard = Array(9).fill({}).map(el => ({id: nanoid(), value: null}))
    const [board, setBoard] = useState(initialBoard)
    const [countMoves, setCountMoves] = useState(0)
    const handelMove = (squereId) => {
        const xOrO = countMoves % 2 === 0 ? 'O' : 'X'
        const updateBoard = board.map(el => el.id === squereId ? {...el, value: xOrO} : el)
        setBoard(updateBoard)
        setCountMoves(countMoves + 1)
    }
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const checkerWinner = () => {
        for (let i = 0; i < arr.length; i++) {
            const [a, b, c] = arr[i]
            if (board[a].value === board[b].value && board[c].value === board[b].value) {
                return board[a].value
            }
        }
        return countMoves === 9 ? 'Friendship' : null
    }
    const winner = checkerWinner()
    const startAgain = () => {
        setBoard(initialBoard)
        setCountMoves(0)
    }
    return (
        <div>
            <h2>
                {winner === null ? <p> Next player: {countMoves % 2 === 0 ? 'O' : 'X'}</p> : <p>Win: {winner}</p>}
                {winner === null ? <p></p> : <button onClick={startAgain}>Start again</button>}
            </h2>
            <Board board={board} handelMove={handelMove}/>
            <h3>
                Number of moves: {countMoves}
            </h3>

        </div>
    );
};

export default TicTacToe;