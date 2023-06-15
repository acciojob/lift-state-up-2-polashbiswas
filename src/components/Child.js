import React from "react";


const Child = ({getinputvalue}) => {

    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type="text"
            onChange={(e)=>getinputvalue(e.target.value)} 
            />
        </div>
    )
}

export default Child;