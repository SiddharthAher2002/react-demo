import React, {useState} from "react";

export const LoginContext = React.createContext({});

const LoginContextProvider = ({children})=>{

    const [isLoggedIn,setLoginStatus] = useState(false);
    const [user,setUser] = useState({});
    return (
        <>
            <LoginContext.Provider value={{user,setUser,isLoggedIn,setLoginStatus}}>
                {children}
            </LoginContext.Provider>
        </>
    );
};
export default LoginContextProvider;