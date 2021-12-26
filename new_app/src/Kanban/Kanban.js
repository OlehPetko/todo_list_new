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
    const deleteCard = async (taskId) => {
        await axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${taskId}`)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
        getCard()
    }

    const postCard = async (newTask) => {
        await axios.post('https://nazarov-kanban-server.herokuapp.com/card', {
            name: newTask,
            description: newTask
        })
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
        getCard()
    }
    useEffect(() => {
        postCard()
    }, [])


    return (
        <div>
            <hr/>
            <InputNewTask postCard={postCard}/>
            <div className='container'>
                <div className='row aling-items-start'>
                    {column.map(column => <Card key={column._id} cards={cards} column={column}
                                                deleteCard={deleteCard}/>)}
                </div>
            </div>

        </div>
    );
};

export default Kanban;