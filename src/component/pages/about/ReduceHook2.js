import React, { useReducer } from "react";

function ReduceHook2() {
    const initalState = {
        firstCounter: 0,
        secondCounter: 0
    };

    const reducer = (currState, action) => {
        switch (action.type) {
            case 'inc':
                return { ...currState, firstCounter: currState.firstCounter + action.value }
            case 'dec':
                return { ...currState, firstCounter: currState.firstCounter - action.value }
            case 'inc5':
                return { ...currState, firstCounter: currState.firstCounter + action.value }
            case 'incSec':
                return { ...currState, secondCounter: currState.secondCounter + action.value }
            case 'decSec':
                return { ...currState, secondCounter: currState.secondCounter - action.value }
            case 'res':
                return initalState
        };


    }
    const [state, dispatch] = useReducer(reducer, initalState);
    const [stateTwo, dispatchTwo] = useReducer(reducer, initalState);

    return (
        <div className="container">
            <div className="row justify-content-center">First State : {state.firstCounter}</div>
            <div className="row justify-content-center" >
                <button onClick={() => dispatch({ type: 'inc', value: 1 })} className="btn btn-outline-secondary m-2">Inc</button>
                <button onClick={() => dispatch({ type: 'dec', value: 1 })} className="btn btn-outline-secondary m-2">Dec</button>
                <button onClick={() => dispatch({ type: 'inc5', value: 5 })} className="btn btn-outline-secondary m-2">Inc 5</button>
                <button onClick={() => dispatch({ type: 'res' })} className="btn btn-outline-secondary m-2">Res</button>
            </div>
            <div className="row justify-content-center">Second State : {state.secondCounter}</div>
            <div className="row justify-content-center" >
                <button onClick={() => dispatch({ type: 'incSec', value: 1 })} className="btn btn-outline-secondary m-2">IncSec</button>
                <button onClick={() => dispatch({ type: 'decSec', value: 1 })} className="btn btn-outline-secondary m-2">DecSec</button>
                <button onClick={() => dispatch({ type: 'res' })} className="btn btn-outline-secondary m-2">Res</button>
            </div>

            <div className="row justify-content-center">Second Reducer State : {stateTwo.firstCounter}</div>
            <div className="row justify-content-center" >
                <button onClick={() => dispatchTwo({ type: 'inc', value: 1 })} className="btn btn-outline-secondary m-2">Inc</button>
                <button onClick={() => dispatchTwo({ type: 'dec', value: 1 })} className="btn btn-outline-secondary m-2">Dec</button>
                <button onClick={() => dispatchTwo({ type: 'res' })} className="btn btn-outline-secondary m-2">Res</button>
            </div>
        </div>

    );
}
export default ReduceHook2;