import React, { useEffect, useState } from 'react';
import {Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';
import Signout from "../pages/Signout";

function Navbar() {
    const [expandNavbar,setExpandNavbar]=useState(false);

    const location=useLocation();

    useEffect(()=>{
        setExpandNavbar(false)
    },[location])

  return (
    <div className='navbar' id={expandNavbar? "open":"close"}>
    
        <div className='toggleButton'>
            <button onClick={()=>{
                setExpandNavbar((prev)=>!prev)
                }}>
                {""}<ReorderIcon></ReorderIcon>{""}
            </button>
        </div>
        <div className='linksdiv'>
            <div className='randomdiv1'>gnjbhnjb n n mmv</div>
            <div className='links'>
                <Link className='linkk' to="/home">Home</Link>
                <Link className='linkk' to="/projects">Projects</Link>
                <Link className='linkk' to="/experience">Experience</Link>
            </div>
            <div className='randomdiv2'><Link className='linkk' to="/">Sign Out </Link></div>
        </div>
        
    </div>
  )
}

export default Navbar;