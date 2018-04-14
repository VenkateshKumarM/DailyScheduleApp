let initialState = {
    fetching: false,
    fetched: false,
    fetching: false,
    users: {},
    error: false
}

export function dailyScheduleReducer(state = initialState, action) {
    switch (action.type) {
        case "Fetch": {
            return { ...state, fetching: true }
            break;
        }
        case "Received": {
            return { ...state, fetched: true, users: action.payload }
            break;
        }
        case "Error": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
    }
    return state;
}


