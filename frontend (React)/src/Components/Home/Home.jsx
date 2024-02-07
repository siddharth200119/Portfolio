import React from "react";
import "./Home.css"
import Welcome from "./Welcome/Welcome"
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <Welcome></Welcome>
            <About></About>
        </div>
    )
}

export default Home