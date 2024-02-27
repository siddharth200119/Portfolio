import React, {useRef} from "react";
import "./About.css";
import {motion} from "framer-motion"

function About(){
    
    return(
        <div id="about" className="section">
            {/* <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 1, delay: 0.25}}>
            <div className="title">
                <h1>About</h1>
            </div>
            </motion.div> */}
            <div className="about-me">
                <motion.div className="title" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 1, delay: 0.25}}>
                    <h3>HELLO!</h3>
                </motion.div>
                <motion.div className="title" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 1, delay: 0.5}}>
                    <p>I am   </p> 
                    <p className="name">Siddharth Ramnani.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 1, delay: 0.75}}>
                    <div className="text">
                        <p>A versatile software developer with expertise spanning Full Stack development, embedded systems, IoT, and AI/ML technologies. Whether it's crafting robust web applications, delving into the intricacies of embedded systems, or exploring the realms of artificial intelligence and machine learning, I thrive on the challenges of the digital landscape.</p>
                        <p>When I'm not immersed in code, you can often find me indulging in my passions for gaming and streaming, where I seek inspiration and relaxation in the virtual worlds created by interactive entertainment.</p>
                        <p>Feel free to explore my diverse skill set and projects, and join me on this journey of innovation and creativity in the digital realm.</p>
                    </div>
                </motion.div>
            </div>
            <div className="skills">
                <h1>skills</h1>
            </div>
        </div>
    )
}

export default About