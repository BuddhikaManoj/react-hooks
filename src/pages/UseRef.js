import React, { useEffect, useState, useRef } from "react";
import Navbar from "../component/Navbar";

//use ref is a hook tha allow us to create mutable variables, which will not  re-render the component

export default function UseRef() {
    const [value,setValue] = useState(0);
    const count = useRef(0);
    console.log(count);

    useEffect(()=> {
        count.current = count.current+1
    },[])

    const inputElement = useRef();
    const btnClicked = () => {
        console.log(inputElement.current);
        inputElement.current.style.backgroundColor = "lightblue";
    }
    return (
        <div>
            <Navbar/>
            <h1>UseRef</h1>
            <button onClick={()=> {setValue((pre) => pre-1)}}>-1</button>
            <h2>{value}</h2>
            <button onClick={()=> {setValue((pre) => pre+1)}}>+1</button>

            <h2>Render count : {count.current}</h2>


            <input type="text" ref={inputElement}/>
            <button onClick={btnClicked}>click here</button>
        </div>
    );
};