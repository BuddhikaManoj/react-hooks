import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

export default function UseEffect() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        setTimeout(()=> {
            setCount(count => count+1)
        },2000);
    },[count]);
    return (
        <div>
            <Navbar/>
            <h1>UseEffect</h1>
            <h1>I have rendered {count} times!</h1>
        </div>
    );
};