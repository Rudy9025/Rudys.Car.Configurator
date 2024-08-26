/* eslint-disable */
import React, { useContext } from 'react';
import './css/BMW.css';
import { AnimationContext } from "../AnimationContext";

const ButtonGroup = () => {
    const { playAnimation } = useContext(AnimationContext);

    const paintButton = (materialName, color) => {
      playAnimation({ material: materialName, color: color });
    };
    
    const caliperButton = (materialName, color) => {
      playAnimation({ material: materialName, color: color });
    };
    
    const rimButton = (materialName, color) => {
      playAnimation({ material: materialName, color: color });
    };
    const github = () => {
        window.open("https://github.com/Rudy9025?tab=repositories", "_blank");
    };

    return (
        <div className="container">
            <div className="title"><span>Car Paint</span></div>
            <div className="items">
                <button className="button blue" onClick={() => paintButton("P918_paint", "#010885")}></button>
                <button className="button green" onClick={() => paintButton("P918_paint", "green")}></button>
                <button className="button white" onClick={() => paintButton("P918_paint", "#f7f5f5")}></button>
                <button className="button red" onClick={() => paintButton("P918_paint", "#ff0b03")}></button>
                <button className="button black" onClick={() => paintButton("P918_paint", "black")}></button>
            </div>
            <div className="title"><span>Caliper</span></div>
            <div className="items">
                <button className="button blue" onClick={() => caliperButton("amdb11_caliper", "blue")}></button>
                <button className="button green" onClick={() => caliperButton("amdb11_caliper", "#0aeb02")}></button>
                <button className="button red" onClick={() => caliperButton("amdb11_caliper", "red")}></button>
                <button className="button yellow" onClick={() => caliperButton("amdb11_caliper", "yellow")}></button>
                <button className="button white" onClick={() => caliperButton("amdb11_caliper", "white")}></button>
            </div>
            <div className="title"><span>Wheel Rim</span></div>
            <div className="items">
                <button className="button white" onClick={() => rimButton("918weissach_wheel", "#f7f5f5")}></button>
                <button className="button red" onClick={() => rimButton("918weissach_wheel", "red")}></button>
                <button className="button yellow" onClick={() => rimButton("918weissach_wheel", "yellow")}></button>
                <button className="button black" onClick={() => rimButton("918weissach_wheel", "black")}></button>
                <button className="button blue" onClick={() => rimButton("918weissach_wheel", "blue")}></button>
            </div>
            <div className="title"><span>Seat Belt</span></div>
            <div className="items">
                <button className="button red" onClick={() => rimButton("P918_interior.0", "red")}></button>
                <button className="button green" onClick={() => rimButton("P918_interior.0", "#0aeb02")}></button>
                <button className="button black" onClick={() => rimButton("P918_interior.0", "black")}></button>
                <button className="button white" onClick={() => rimButton("P918_interior.0", "white")}></button>
                <button className="button brown" onClick={() => rimButton("P918_interior.0", "#F8C794")}></button>
            </div>            <div className="githubLogo" ><span><img src="github.png" alt="githubLogo" height={25} width={25} onClick={github}/></span></div>

        </div>
    );
};

export default ButtonGroup;
