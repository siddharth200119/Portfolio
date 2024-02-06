import React from "react";
import "./Header.css"
import NavItem from "./NavItem/NavItem";

function Header(){
    return(
        <div id="header">
            <div id="navbar">
                <div className="nav-logo">
                    Logo
                </div>
                <div className="nav-items">
                    <NavItem itemName="About" lineColor="red" itemLink="#About"></NavItem>
                    <NavItem itemName="Projects" lineColor="green" itemLink="#About"></NavItem>
                    <NavItem itemName="Experience" lineColor="blue" itemLink="#About"></NavItem>
                    <NavItem itemName="Contact" lineColor="yellow" itemLink="#About"></NavItem>
                </div>  
                <div className="theme-toggle">
                    <button>Dark-mode</button>
                </div>
            </div>
        </div>
    )
}

export default Header