import {GETDATA, ENTERDATA, REMOVEDATA} from '../actionConstants'

export const fetDataAction = (payload) =>{
    return{
        type : GETDATA,
        payload
    }
}

export const enterTodoData = (payload) =>{
    return{
        type:ENTERDATA,
        payload
    }
}

export const removeTodoData = (payload) =>{
    return{
        type:REMOVEDATA,
        payload
    }
}