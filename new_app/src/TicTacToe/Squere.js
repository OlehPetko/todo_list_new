import React from 'react';
const style = {border: '1px solid black', background: 'white', fontFamily: 'fantasy', fontSize: '80px', fontWeight: '900px', cursor: 'pointer'}
const Squere = (props) => {
    const{el, handelMove} = props
    return (
        <div style={style} onClick={() => handelMove(el.id)}>
            {el.value}
        </div>
    );
};

export default Squere;