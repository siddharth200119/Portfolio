import React, {useState, useEffect} from "react";
import "./Navbar.css"

function Navbar(){

    const [classNames, setClassNames] = useState(["", "", ""])

    function expand_btn(){
            if(classNames[0] == ""){
                setClassNames(prevClassNames => ["one", "two", "three"])
            }else{
                setClassNames(prevClassNames => ["", "", ""])
            }
    }
    return(
        <div id="navbar">
            <p>SIDDHARTH RAMNANI</p>
            <div className="expand-btn" onClick={expand_btn}>
                <div className={classNames[0]}></div>
                <div className={classNames[1]}></div>
                <div className={classNames[2]}></div>
            </div>
        </div>
    )
}

export default Navbar