import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
const Task = (props) => {
    const {card, deleteCard} = props
    return (
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{card.description}</h5>
                    <p className="card-text">{card.name}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{card.description}</li>
                </ul>
                <div className="card-body">
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-danger" onClick={() => deleteCard(card._id)}>Delete</button>
                </div>
        </div>
    );
};

export default Task;