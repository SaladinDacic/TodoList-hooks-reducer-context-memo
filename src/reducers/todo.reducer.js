import { v4 as uuidv4 } from 'uuid';

function todoReducer(todosState, action) {
    switch(action.type){
        case "ADD-TODO":
            return [{id: uuidv4(), task: action.task, complited:false}, ...todosState];
        case "TOGGLE-TODO":
            return todosState.map(val=>{
                return val.id === action.id ? {...val, complited: !val.complited} : val;
            });
        case "EDIT-TODO":
            return todosState.map(val=>{
                return val.id === action.id ? {...val, task: action.task} : val;
            });
        case "DELETE-TODO":
            return todosState.filter(val=>{
                return val.id !== action.id;
            });
        default:
            return todosState;
    }
}

export default todoReducer
