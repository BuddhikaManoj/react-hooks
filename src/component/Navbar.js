import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
          <nav style={{margin:"5px"}}>
                <Link to="/" style={{padding:"5px", textDecoration:"none"}}>Home</Link>
                <Link to="/usestate" style={{padding:"5px", textDecoration:"none"}}>useState</Link>
                <Link to="/useeffect" style={{padding:"5px", textDecoration:"none"}}>useEffect</Link>
                <Link to="/useref" style={{padding:"5px", textDecoration:"none"}}>useRef</Link>
                <Link to="/usememo" style={{padding:"5px", textDecoration:"none"}}>useMemo</Link>
                <Link to="/usecallback" style={{padding:"5px", textDecoration:"none"}}>useCallback</Link>
                <Link to="/usecontext" style={{padding:"5px", textDecoration:"none"}}>useContext</Link>
                <Link to="/usereducer" style={{padding:"5px", textDecoration:"none"}}>useReducer</Link>
                <Link to="/custom" style={{padding:"5px", textDecoration:"none"}} >custom</Link>
          </nav>
        </div>
    )
};