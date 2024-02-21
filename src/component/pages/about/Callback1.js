import { useCallback, useState } from "react";
import Count from "./Count";
import Button from "./Button";
function Callback1() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incCount1 = useCallback(()=>{
        setCount1(prevCount1=>prevCount1+1);
    },[count1]);

    const incCount2 = useCallback(()=>{
        setCount2(prevCount2=>prevCount2+1);
    },[count2]);
    
    return (
        <div className="container">
            <div className="row">
                <Count value={count1}></Count>
                <Button handleClick={incCount1}>INC Count1</Button>
            </div>

            <div className="row">
                <Count value={count2}></Count>
                <Button handleClick={incCount2}>INC Count2</Button>
            </div>


        </div>
    );
}
export default Callback1;