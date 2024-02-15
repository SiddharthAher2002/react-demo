import { useReducer } from "react";

function ReduceHook1(){
    const initialState = {
        firstCounter:0
    };
    const reducer = (state,action)=>{
        switch(action){
            case 'increment':
                return {firstCounter: state.firstCounter+1};
            case 'decrement':
                return {firstCounter: state.firstCounter-1};
            case 'reset':
                return {firstCounter: initialState.firstCounter};
            default:
                return state.firstCounter;
        }
    };

    const[count,dispatch] = useReducer(reducer,initialState)
    return (
        <>
            <div>Count: {count.firstCounter}</div>
            <button className="btn btn-outline-dark m-1" onClick={()=>dispatch('increment')}>increment</button>
            <button className="btn btn-outline-dark m-1" onClick={()=>dispatch('decrement')}>decrement</button>
            <button className="btn btn-outline-dark m-1" onClick={()=>dispatch('reset')}>rest</button>
        </>
    );
}
export default ReduceHook1;