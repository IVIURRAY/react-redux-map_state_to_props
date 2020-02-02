
const addCount = payload => {
    return {type: 'ADD_COUNT', payload}
}

const minusCount = payload => {
    return {type: 'MINUS_COUNT', payload}
}

const resetCount = payload => {
    return {type: 'RESET_COUNT', payload}
}

export {
    addCount,
    minusCount,
    resetCount
}