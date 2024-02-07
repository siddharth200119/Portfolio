import React from "react";
import "./Navbar.css";

function NavbarItem(props){
    return(
        <div className="NavbarItem">
            <a href={props.href}>{props.title}</a>
        </div>
    )
}       

export default NavbarItem