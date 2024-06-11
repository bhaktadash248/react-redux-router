import React from "react";
import { enterTodoData, removeTodoData } from './redux/actions/fetchActions';

import { useDispatch, useSelector } from "react-redux";

const TodoAdd = () => {
    const dispatch = useDispatch()
    const state = useSelector((store) => store.toDoReducer.items)
// console.log(state);
    const handleSubmit = () => {
        let inputVal = document.querySelector('#handleSubmit').value;
        let todoDataObj = {
            inputVal: inputVal,
            id: Math.random()
        }
        dispatch(enterTodoData(todoDataObj))
       
    }

    const handleRemoveData = (params)=>{
       dispatch(removeTodoData(params))
    }

    return (
        <div>
            <input type="text" placeholder="Type something" id="handleSubmit" />
            <input type="button" value='Submit' onClick={handleSubmit} />
            <ul>
                {
                    state && state.map((res)=>(
                        <li key={res.id}>
                            {res.inputVal} 
                            <input type="button" value='Delete' onClick={() => handleRemoveData(res)}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoAdd;