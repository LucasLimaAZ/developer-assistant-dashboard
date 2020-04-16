export const addTask = task => ({
    type: ADD_TASK,
    payload: { task }
})

export const checkTask = task => ({
    type: CHECK_TASK,
    payload: { task }
})