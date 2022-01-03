const initialState = {
    cards: [],
    columns: [
        {_id: Math.random(), status: 'todo'},
        {_id: Math.random(), status: 'progress'},
        {_id: Math.random(), status: 'review'},
        {_id: Math.random(), status: 'done'},
    ]
}
const kanban = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARDS':
            return {...state, cards: action.payload}

        default:
            return state
    }
}
export default kanban