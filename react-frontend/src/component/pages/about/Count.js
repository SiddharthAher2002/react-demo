import React from "react";
function Count(props){
    console.log("render display element");
    return (
        <p>Count {props.value}</p>
    );
}
export default React.memo(Count);