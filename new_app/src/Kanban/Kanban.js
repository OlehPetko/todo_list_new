import React, {useEffect, useState} from 'react';
import Card from "./Card";
import InputNewTask from "./InputNewTask";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'

const Kanban = () => {

    const [column, setColumn] = useState([])
    const [cards, setCard] = useState([])


    const getColumn = () => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/column')
            .then(res => {
                console.log(res.data);
                setColumn(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const getCard = () => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {
                console.log(res.data);
                setCard(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        getColumn()
        getCard()
    }, [])

    return (
        <div>
            <hr/>
            <InputNewTask />
            <div className='container'>
                <div className='row aling-items-start'>
                    {column.map(column => <Card key={column._id} cards={cards} column={column}/>)}
                </div>
            </div>

        </div>
    );
};

export default Kanban;