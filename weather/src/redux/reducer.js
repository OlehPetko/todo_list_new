const initialState = {
    counters: [
        {id: Math.random(), value: 0},
        {id: Math.random(), value: 5},
        {id: Math.random(), value: 10},
    ]
}
const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS':
            const newCount = state.counters
                .map(el => el.id === action.payload.id ? {...el, value: el.value + action.payload.value}  : el)
    return {
        ...state,
        counters:  newCount
    }
        default:
            return state
    }

}
export default counter

