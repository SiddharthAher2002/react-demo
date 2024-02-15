import { useContext,useEffect,useRef,useState } from "react";
import { LoginContext } from "../../context/auth/LoginContext";

function User() {
    const[count,setCount] = useState(0);

    const { user } = useContext(LoginContext);
    const inputRef = useRef(null);
    const intervalRef = useRef();
    
    useEffect(()=>{
        inputRef.current.focus();

        intervalRef.current = setInterval(()=>{
            setCount(prevCount=>prevCount+1);
        },1000);

        return ()=>{
            clearInterval(intervalRef.current);
        };

    },[]);
    
    return (
        <>
            Profile
            user : {user.userEmail}
            <br />
            Pass : {user.userPassword}
            <br />
            <input ref={inputRef} type="text"/>
            <br />

            Count : {count} 
            <button onClick={()=>clearInterval(intervalRef.current)} className="btn btn-outline-dark">clear</button>
        </>
    );
}

export default User;