import React, { useState } from "react";
import './Button.css';
function IncDec(){
    const [count, setCount]=useState(0);

    return(
        <div>
            <h2>Question number 3</h2>
            <button className="ChangeViewer">{count}</button>
            <br/>
        <button className="Button2" onClick={()=> setCount((count)=> count+1)}> Increase </button>
        <button className="Button2" onClick={()=> setCount((count)=> count-count)}> Reset </button>
        <button className="Button2" onClick={()=> setCount((count)=> count-1)}> Decrease </button>
        </div>
    );
}
export default IncDec;
