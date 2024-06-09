import {GETDATA} from '../actionConstants'

export const fetDataAction = (payload) =>{
    return{
        type : GETDATA,
        payload
    }
}