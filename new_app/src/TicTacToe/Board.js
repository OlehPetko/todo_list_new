import React from 'react';
import Squere from "./Squere";

const style = {weight: '500px', height: '700px', margin: '0 margin', display: 'grid', gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)'}
const Board = (props) => {
    const{board, handelMove} = props
    return (
        <div style={style}>
            {board.map(el => <Squere el={el} handelMove={handelMove} />)}
        </div>
    );
};

export default Board;