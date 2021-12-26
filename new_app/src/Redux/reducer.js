const initialState = {
    cards: [
        {_id: Math.random(), name: 'Liverpool', status: 'todo', priority: 1},
        {_id: Math.random(), name: 'Cancun', status: 'done', priority: 2},
    ],
    columns: [
        {_id: Math.random(), status: 'todo'},
        {_id: Math.random(), status: 'progress'},
        {_id: Math.random(), status: 'review'},
        {_id: Math.random(), status: 'done'},
    ]
}
const kanban = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, {_id: Math.random(), name: 'Liverpool', status: 'todo', priority: 1},]
            }
        case 'DELETE_CARD':
            const newCards = state.cards.filter(el => el._id !== action.payload)
            return {
                ...state,
                cards:  newCards
        }
            default: return state
    }


}
export default kanban