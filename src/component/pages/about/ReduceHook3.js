import { useReducer,useState } from "react";

const initialState = {
    firstStmt:0,
    SecondStmt:0
}
const reducer = (currState,action)=>{
    switch(action.operation){
        case 'add':
            return {firstStmt: parseInt(action.value1) + parseInt(action.value2) }
        case 'sub': 
            return {firstStmt: action.value1 - action.value2 }
        case 'reset':
            return initialState;
        default:
            return currState;
    }
}
function ReduceHook3(){
    const [firstValue , setFirst] = useState(0);
    const [secondValue, setSecond] = useState(0);
    const [calc1,dispatch1] = useReducer(reducer,initialState);
    const [calc2,dispatch2] = useReducer(reducer,initialState);
    return (
        <div className="container">
            <div className="row justify-content-center">{calc1.firstStmt}</div>
            <div className="row justify-content-center">
                <input type="text" placeholder="value 1" onChange={(e)=>setFirst(e.target.value)} value={firstValue}/>
                
                <input type="text" placeholder="value 2" onChange={(e)=>setSecond(e.target.value)} value={secondValue}/>
            </div>
            <div className="row justify-content-center">
                <button className="btn btn-outline-dark m-2" onClick={()=>dispatch1({operation:'add',value1:firstValue, value2:secondValue})}>ADD</button>
                <button className="btn btn-outline-dark m-2" onClick={()=>dispatch1({operation:'sub',value1:firstValue, value2:secondValue})}>Sub</button>
                <button className="btn btn-outline-dark m-2" onClick={()=>dispatch1({operation:'reset'})}>Reset</button>
            </div>
            
        </div>
    );
}
export default ReduceHook3;
