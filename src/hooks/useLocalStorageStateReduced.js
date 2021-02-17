import {useReducer, useEffect} from 'react';

function useSetLocalStorageState(key, initialState, reducer) {
    const [state, dispatch] = useReducer(reducer, initialState, ()=>{
        let value;
        try{
            value = JSON.parse(window.localStorage.getItem(key) || String(initialState));
        }catch(e){
            value = initialState;
        }
        return value;
        }   
    )
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(state))
    })   
    return [state, dispatch];
}

export default useSetLocalStorageState
