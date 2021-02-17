import {useState} from 'react'

function useToggleState(initialState) {
    const [toggle, settoggle] = useState(initialState)
    const toggleIt=()=>{
        settoggle(!toggle)
    }
    return [toggle, toggleIt];
}

export default useToggleState
