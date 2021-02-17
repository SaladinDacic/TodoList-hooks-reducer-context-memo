import Todo from "./Todo";
import TodoForm from "./TodoForm";
import React, {useContext, memo} from 'react';
import {TodosContext} from "./contexts/Todos.Context";

function TodoList() {
    const todos = useContext(TodosContext)
    const showAllTodos = todos.map((val)=>{
        return <Todo key={val.id} {...val}/>
    })
    return (
        <div>
            <TodoForm/>
            {showAllTodos}
        </div>
    )
}

export default memo(TodoList)
