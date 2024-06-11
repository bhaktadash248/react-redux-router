import { ENTERDATA, REMOVEDATA } from '../actionConstants'

const toDoReducer = (state = { items:[] }, action) => {
    console.log(action.payload);
    console.log(state.items)
    switch (action.type) {
        case ENTERDATA:
            return { items: [...state.items, action.payload] }
        case REMOVEDATA: 
        // return{
            console.log(state.items && state.items.filter((el) => el.id !== action.payload.id))
        // }
        default:
            return state
    }
}

export default toDoReducer;