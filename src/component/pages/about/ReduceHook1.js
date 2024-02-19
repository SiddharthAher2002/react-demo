import { useReducer } from "react";

function ReduceHook1(){
    const initalState = 0;
    const reducer = (currState,action)=>{
        let newState;
        switch(action){
            case 'increment':
                newState= currState+1;
                break;
            case 'decrement':
                newState = currState-1;
                break;
            case 'reset':
                newState = initalState;
                break;
            default:
                return currState;
        }
        return newState;
    };

    const [state,dispatch] = useReducer(reducer,initalState);
    return (
        <>
            <div >State : {state}</div>
            <div >
                <button onClick={()=>dispatch('increment')} className="btn btn-outline-secondary m-2">Inc</button>
                <button onClick={()=>dispatch('decrement')} className="btn btn-outline-secondary m-2">Dec</button>
                <button onClick={()=>dispatch('reset')} className="btn btn-outline-secondary m-2">Res</button>
            </div>
        </>
    );

}
export default ReduceHook1;
