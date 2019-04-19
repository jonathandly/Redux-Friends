const initialState = {
    friends: [],
    deletingFriend: false,
    fetchingFriends: false,
    loggingIn: false,
    addingFriend: false,
    updatingFriends: false,
    error: null,
    token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true,
                token: action.payload
            };
        case ADDING_FRIEND:
            return {
                ...state,
                addingFriend: true,
                error: '',
                friends: action.payload
            };
        case DELETING_FRIEND:
            return {
                ...state,
                deletingFriend: true,
                friends: action.payload
            }
        default:
            return state;
    }
}   

export default reducer;