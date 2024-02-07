import React from "react";
import "./Skill.css";

function Skill(props){
    return(
        <div className="skill">
            <img src={props.imgPath}/>
            <h4>{props.name}</h4>

            <div className="skill details">
                
            </div>
        </div>
    )
}

export default Skill