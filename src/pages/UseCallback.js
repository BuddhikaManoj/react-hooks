import React, { useCallback, useState } from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";

export default function UseCallback() {
    const [count,setCount] = useState(0);

    const newFunction = useCallback(()=> {},[])

    return (
        <div>
            <Navbar/>
            <h1>UseCallback</h1>

            <Header newFunction={newFunction}/>
            <h2>{count}</h2>
            <button onClick={() => {setCount(pre=>pre+1)}}>Click here</button>
        </div>
    );
};