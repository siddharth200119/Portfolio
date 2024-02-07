import React, {useState, useEffect} from "react";
import NavbarItem from "./NavbarItem";
import "./Navbar.css"

function Navbar(){

    const [classNames, setClassNames] = useState(["", "", "", "NavbarItems"])

    function expand_btn(){
            if(classNames[0] == ""){
                setClassNames(prevClassNames => ["one", "two", "three", "NavbarItems show"])
            }else{
                setClassNames(prevClassNames => ["", "", "", "NavbarItems"])
            }
    }
    return(
        <div id="navbar">
            <p>SIDDHARTH RAMNANI</p>
            <div className="nav">
                <div className={classNames[3]}>
                    <NavbarItem title="About" href="#about"></NavbarItem>
                    <NavbarItem title="Projects" href="#projects"></NavbarItem>
                    <NavbarItem title="Experience" href="#experience"></NavbarItem>
                    <NavbarItem title="Education" href="#education"></NavbarItem>
                    <NavbarItem title="Contact" href="#contact"></NavbarItem>
                </div>
                <div className="expand-btn" onClick={expand_btn}>
                    <div className={classNames[0]}></div>
                    <div className={classNames[1]}></div>
                    <div className={classNames[2]}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar