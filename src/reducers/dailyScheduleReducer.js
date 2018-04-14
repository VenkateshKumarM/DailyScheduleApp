let initialState = {
    fetched: false,
    users: {},
    error: false
}

export function dailyScheduleReducer(state = initialState, action) {
    switch (action.type) {
        case "Received": {
            return { ...state, fetched: true, users: action.payload }
            break;
        }
        case "Error": {
            return { ...state, fetched: false, error: action.payload }
            break;
        }
    }
    return state;
}


