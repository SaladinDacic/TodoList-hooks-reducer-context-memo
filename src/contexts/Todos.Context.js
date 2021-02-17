import { v4 as uuidv4 } from 'uuid';
import React, {createContext} from 'react';
import todoReducer from "../reducers/todo.reducer";
import useLocalStorageStateReduced from "../hooks/useLocalStorageStateReduced";


export const TodosContext = createContext();
export const DispatchContext = createContext();
export function TodosProvider(props) {
    const initialTodos = [
        {id:uuidv4(), task: "jasam inital todo 1", complited:false},
        {id:uuidv4(), task: "jasam inital todo 2", complited:true}
    ]

    const [todos, dispatch] = useLocalStorageStateReduced("todos",initialTodos,todoReducer)

    // const {todos, addTodo, toggleTodo, editTodo, deleteTodo} = useTodos(initialTodos);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
