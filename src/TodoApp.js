import TodoList from "./TodoList";
import React, {memo} from 'react';
import {TodosProvider} from "./contexts/Todos.Context";

function TodoApp() {
    return (
        <div>
            <TodosProvider>
                <TodoList/>
            </TodosProvider>
        </div>
    )
}

export default memo(TodoApp)
