const githubReducer = (state, action) => {
    switch (action.type) {
        case 'get_users':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'set_loading':
            return {
                ...state,
                loading: true
            }
        case 'clear_users':
            return {
                ...state,
                users: [],
                loading: false
            }
        case 'get_user':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export default githubReducer