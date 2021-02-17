import React, {useContext, memo} from 'react';
import {DispatchContext} from "./contexts/Todos.Context";
import useToggleState from "./hooks/useToggleState";
import TodoEditForm from "./TodoEditForm";
function Todo({id, task, complited}) {
    const dispatch = useContext(DispatchContext)
    const [editToggled, toggleEdit] = useToggleState(false)
    return (
        <div style={{textDecoration:`${complited?"line-through":""}`}} >
            {editToggled
            ?<>
            <TodoEditForm id={id} task={task} toggleEdit={toggleEdit}/>
            </>
            :<>
            <h4 onClick={()=>dispatch({type:"TOGGLE-TODO", id:id})}>{task}</h4>
            </>
            }
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={()=>dispatch({type:"DELETE-TODO", id:id})}>Delete</button>
        </div>
    )
}
Todo.defaultProps={
    task: "ja sam default prop"
}

export default memo(Todo)
