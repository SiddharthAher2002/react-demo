import React, { useEffect, useState } from "react";
function LocalStorage() {

    const [isLoggedin, setIsloggedin] = useState(false);
    const [inpName, setInpName] = useState('');

    const localName = localStorage.getItem('name');

    const handleLogin = () => {
        setIsloggedin(true);
        setInpName("james");
    }
    const handleLogout = () => {
        localStorage.removeItem('name');
    }

    useEffect(() => {
        localStorage.setItem('name', inpName);
    }, [inpName])
    return (
        <div className="container">
            <div className="row">
                {localName}
            </div>
            <div className="row">
                <button onClick={handleLogin} className="btn btn-outline-dark">log-in</button>
                <button onClick={handleLogout} className="btn btn-outline-dark">log-out</button>
            </div>
        </div>
    )
}
export default LocalStorage;