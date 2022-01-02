import axios from "axios";

export const getCards = (dispatch) => {
    return (dispatch) => {
        axios.get(`https://nazarov-kanban-server.herokuapp.com/card/`)
            .then(res => {
                dispatch({
                    type: 'GET_CARDS',
                    payload: res.data
                })
            })
            .catch(error => console.log(error))
    }
}
export const addCard = (card) => {
    return (dispatch) => {
        axios.post(`https://nazarov-kanban-server.herokuapp.com/card`, card)
            .then(res => dispatch(getCards()) )
            .catch(error => console.log(error))
    }
}

export function cardDeleteById(cardId) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `https://nazarov-kanban-server.herokuapp.com/card/${cardId}`
        })
            .then(res => {
                dispatch(getCards())})
            .catch((error) => console.log(error))
    }
}
export function moveDirection(card, columns) {
    const colStatuses = columns.map(el => el.status)
    const status = colStatuses[colStatuses.indexOf(card.status) + 1]

    return (dispatch) => {
        axios.patch('https://nazarov-kanban-server.herokuapp.com/card/' + card, {status})
            .then(res => dispatch(getCards()))
            .catch(error => console.log(error))
    }
}