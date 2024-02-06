import React from "react";
import "./Home.css"
import Welcome from "./Welcome/Welcome"
import Navbar from "./Navbar/Navbar";
function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <Welcome></Welcome>
        </div>
    )
}

export default Home