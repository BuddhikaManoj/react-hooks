import React, { useState, useMemo } from "react";
import Navbar from "../component/Navbar";

//use memo is just like caching, it memorize value and therefore we dont need to calculate values again and again
//use memo returns a memorized value
//useCallback returns a memorized function
export default function UseMemo() {

    const [number,setNumber] =useState(0);
    const [count,setCounter] =useState(0);

    const cubeNum = (num) => {
        console.log("calculation done");
        return Math.pow(num, 3);
    }
    const result = useMemo(()=>cubeNum(number),[number]);
    return (
        <div>
            <Navbar/>
            <h1>useMemo</h1>
            <input type="number" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
            <h2>cube of the number : {result}</h2>

            <button onClick={() => {setCounter(count+1)}}>count++</button>
            <h2>count : {count}</h2>
        </div>
    );
};