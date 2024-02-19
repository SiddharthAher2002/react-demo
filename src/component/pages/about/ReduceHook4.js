import {useState,useEffect,useReducer} from 'react';
import axios from 'axios';

const initialState = {
    isLoading : true,
    data : {},
    err : ''
}
const reducer = (currState, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                isLoading:false,
                data: action.payload,
                err:''
            }
        case 'FETCH_FAIL':
            return {
                isLoading:false,
                data:{},
                err:'something went wrong!'
            }
    }
}
function ReduceHook4(){
    const [user,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/usrs/1')
        .then((res)=>{
            dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch((err)=>{
            dispatch({type:'FETCH_FAIL',payload:err.message})
        })
    },[])
    return (
        <>
            {user.isLoading ? null : user.data.name}
            {user.err!='' && user.err}
        </>
    );
}
// function ReduceHook4(){
//     const [loading,setLoading] = useState(true);
//     const [user,setUser] = useState({});
//     const [err,setErr] = useState('');

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/sers/1")
//         .then((res)=>{
//             setLoading(false);
//             setUser(res.data);
//             setErr('');
//         })
//         .catch((err)=>{
//             setLoading(false);
//             setErr(err);
//         })
//     },[]);
//     return (
//         <>
//             {loading ? null:user.name}
//             {err!='' && err.message}
//         </>
//     );
// }
export default ReduceHook4;