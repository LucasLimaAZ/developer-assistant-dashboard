const initialState = {
    tasks: ["task 1 para testes", "aueborissaurisson", "meu teste bem legal"]
}

export default todoListReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHECK_TASK':
            return Object.assign({}, state, { taskStatus: action.status })

        default:
            return state
    }
}