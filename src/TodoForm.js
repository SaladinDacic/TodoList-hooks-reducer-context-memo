import React, {useContext, memo} from 'react';
import {DispatchContext} from "./contexts/Todos.Context";
import useSetInput from "./hooks/useSetInput";

function TodoForm() {
    const [newInput, changeInput, restInput] = useSetInput("");
    const dispatch = useContext(DispatchContext)
    return (
        <form onSubmit={(evt)=>{
            evt.preventDefault();
        }}>
            <h1>Enter new Todo:</h1>
            <input value={newInput} onChange={changeInput}/>
            <h3>{newInput}</h3>
            <button onClick={()=>{dispatch({type:"ADD-TODO", task:newInput}); restInput()}}>Submit</button>
            <button onClick={restInput}>Rest</button>
        </form>
    )
}

export default memo(TodoForm)
