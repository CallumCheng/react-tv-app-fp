const initState = {
    watchlist: [],
    loading: true,
    showData: [],
    error: ""

}

const reducer = (state=initState, action) => { //every reducer needs a default
    switch (action.type) {
        case 'ADD_SHOW':
            return {
                ...state,
                watchlist: [...state["watchlist"], action.payload]
            }
        case 'REMOVE_SHOW':
            return {
                ...state,
                watchlist: state["watchlist"].filter(s => s.id != action.payload)
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'LOAD_SHOWS':
            return{
                ...state,
                loading: false,
                showData: action.payload,
                error: ""
            }
        default:
            return state; //state is undefined = no default
    }
}

export default reducer;
