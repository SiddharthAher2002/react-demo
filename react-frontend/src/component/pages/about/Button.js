import React from "react";
function Button({handleClick,children}){
    console.log("render button element ",children);
    return (
        <button className="btn btn-outline-dark m-2" onClick={handleClick}>{children}</button>
    );

}
export default  React.memo(Button);