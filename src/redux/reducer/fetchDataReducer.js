import {GETDATA} from '../actionConstants'

const initialState ={}

const fetchDataReducer = (state={initialState}, action) =>{
    switch(action.type){
        case GETDATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default fetchDataReducer