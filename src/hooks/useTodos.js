import { v4 as uuidv4 } from 'uuid';
import useSetLocalStorageState from "./useSetLocalStorageState";

function useTodos(initialTodos) {
    
    const [todos, setTodos] = useSetLocalStorageState("todos", initialTodos)
    const addTodo=(task)=>{
        setTodos([{id: uuidv4(), task, complited:false}, ...todos])
    }
    const toggleTodo=(id)=>{
        setTodos(todos.map(val=>{
            return val.id === id ? {...val, complited: !val.complited} : val;
        }))
    }
    const editTodo = (id, task)=>{
        setTodos(todos.map(val=>{
            return val.id === id ? {...val, task} : val;
        }))
    }
    const deleteTodo = (id)=>{
        setTodos(todos.filter(val=>{
            return val.id !== id;
        }))
    }
    
    return {todos, addTodo, toggleTodo, editTodo, deleteTodo}
}



export default useTodos;