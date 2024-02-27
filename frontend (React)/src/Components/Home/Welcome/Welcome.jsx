import React from "react";
import "./Welcome.css"

function Welcome(){
    return(
        <div id="welcome" className="section">
            <div className="background">
                <div className="background-div">
                    <p>ソフト</p>
                    <div></div>
                </div>
                <div className="background-div" style={{alignItems: "flex-end"}}>
                    <div style={{transform: "rotate(180deg)"}}></div>
                    <p>武士</p>
                </div>
            </div>
            <div className="intro-div"></div>
            <h1 className="intro">SOFTWARE DEVELOPER</h1>
        </div>
    )
}

export default Welcome