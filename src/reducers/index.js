const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return Object.assign({}, state, {count: state.count += 1})
        case 'MINUS_COUNT':
            return Object.assign({}, state, {count: state.count -= 1})
        case 'RESET_COUNT':
            return Object.assign({}, state, {count: state.count = 0})
        default:
            return state
    }
}

export default countReducer;