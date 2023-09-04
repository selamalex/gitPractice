import React, { useEffect, useState } from "react";
import './Button.css';
function EffectTitle(){
    const [count, setCount]=useState(0);
    useEffect(()=>{alert("Component is mounted")},[]);
useEffect(()=>{document.title=`count: ${count}`;},[count]);
    return(
        <div>
             <h2>Question number 4</h2>
            <button className="ChangeViewer">{count}</button>
            <br/>
        <button className="Button3" onClick={()=> setCount((count)=> count+1)}> Click </button>
       
        </div>
    );
}
export default EffectTitle;
