import React from "react";
import "./NavItem.css"

function NavItem(props){
    return(
        <div className="NavItem">
            <a href={props.itemLink}>{props.itemName}</a>
            <div className="underline" style={{backgroundColor: props.lineColor}}></div>
        </div>
    )
}

export default NavItem