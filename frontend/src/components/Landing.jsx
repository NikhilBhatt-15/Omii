import React, { useState } from "react";
import { Link } from "react-router-dom";

const Landing = ()=>{
    const [name,setName] = useState("");



    return(
        <>
        <div>
        <input type="text" value={name} onChange = {(e)=>setName(e.target.value)} placeholder="Enter name"/>
        <Link to = {'/room?name='+name}>
        Join
        </Link>
        </div>
        </>
    )
}


export default Landing;