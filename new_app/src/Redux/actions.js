import axios from "axios";

export function cardDeleteById(cardId) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `https://nazarov-kanban-server.herokuapp.com/card/${cardId}`
        })
            .then(() => console.log('ok'))
            .catch(() => console.log('err'))
    }
}