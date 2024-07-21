import React, { useState } from "react";
import Navbar from "../component/Navbar";

export default function UseState() {
    //car object values
    const [car, setCar] = useState({
        model:"toyota",
        color:"red",
        year:"2023"
    });
    //change specific values of object using previous value
    const change = () => {
        // setCar({...car,color:"blue"});
        setCar((prev) => {
            return {...prev, color:"white"}
        });
    }

    //set count initial value
    const [count,setCount] = useState(0);

    //increase count value
    const increaseCount = () => {
        setCount(count+1);
    }
    //increase count value
    const decreaseCount = () => {
        setCount(count-1);
    }

    const [number,setNumber] = useState(0);
    const increaseNumber = () => {
        setNumber((prev) => prev+1);
        setNumber((prev) => prev+1);
        setNumber((prev) => prev+1);
        setNumber((prev) => prev+1);
    }

    const [name,setName] = useState("");

    const handleSubmit = () => {
       
        alert("your name is "+ name);
        
    }
    
    return (
        <div>
            <Navbar/>
            <h1>UseState</h1>
            <h2>this is a {car.model} {car.color} car manufactured in {car.year}</h2>
            <button onClick={change}>change</button>

            <h2>Count : {count}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>decrease</button>

            <h2>Number : {number}</h2>
            <button onClick={increaseNumber}>Increase by 4</button>

             <form onSubmit={handleSubmit}>
             <label for="name">Enter your Name</label>
            <input type="text" onChange={(e) => {setName(e.target.value);
            }}/>

            <button type="submit">Submit</button>
            </form>

        </div>
    );
};