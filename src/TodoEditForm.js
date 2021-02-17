import React, {useContext, memo} from 'react';
import {DispatchContext} from "./contexts/Todos.Context";
import useSetInput from "./hooks/useSetInput";

function TodoEditForm({id, task, toggleEdit}) {
    const dispatch = useContext(DispatchContext)
    const [newInput, changeInput, restInput] = useSetInput(task);
    return (
        <form onSubmit={(evt)=>{
            evt.preventDefault();
            dispatch({type:"EDIT-TODO", id:id, task:newInput});
            toggleEdit()
            restInput();
        }}>
            <input value={newInput} onChange={changeInput} autoFocus/>
        </form>
    )
}

export default memo(TodoEditForm)
