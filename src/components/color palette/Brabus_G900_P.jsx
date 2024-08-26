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
                <button className="button blue" onClick={() => paintButton("Car_paint", "#010885")}></button>
                <button className="button green" onClick={() => paintButton("Car_paint", "green")}></button>
                <button className="button white" onClick={() => paintButton("Car_paint", "#f7f5f5")}></button>
                <button className="button red" onClick={() => paintButton("Car_paint", "#ff0b03")}></button>
                <button className="button black" onClick={() => paintButton("Car_paint", "black")}></button>
            </div>
            <div className="title"><span>Caliper</span></div>
            <div className="items">
                <button className="button blue" onClick={() => caliperButton("amdb11_caliper.002", "blue")}></button>
                <button className="button green" onClick={() => caliperButton("amdb11_caliper.002", "#0aeb02")}></button>
                <button className="button red" onClick={() => caliperButton("amdb11_caliper.002", "red")}></button>
                <button className="button yellow" onClick={() => caliperButton("amdb11_caliper.002", "yellow")}></button>
                <button className="button white" onClick={() => caliperButton("amdb11_caliper.002", "white")}></button>
            </div>
            <div className="title"><span>Wheel Rim</span></div>
            <div className="items">
                <button className="button white" onClick={() => rimButton("G900_rocket_wheel_color", "#f7f5f5")}></button>
                <button className="button red" onClick={() => rimButton("G900_rocket_wheel_color", "red")}></button>
                <button className="button yellow" onClick={() => rimButton("G900_rocket_wheel_color", "yellow")}></button>
                <button className="button black" onClick={() => rimButton("G900_rocket_wheel_color", "black")}></button>
                <button className="button blue" onClick={() => rimButton("G900_rocket_wheel_color", "blue")}></button>
            </div>
            <div className="title"><span>Interior Texture</span></div>
            <div className="items">
                <button className="button red" onClick={() => rimButton("signal_R_1", "red")}></button>
                <button className="button yellow" onClick={() => rimButton("signal_R_1", "yellow")}></button>
                <button className="button green" onClick={() => rimButton("signal_R_1", "#0aeb02")}></button>
                <button className="button white" onClick={() => rimButton("signal_R_1", "white")}></button>
                <button className="button brown" onClick={() => rimButton("signal_R_1", "#F8C794")}></button>
            </div>
            <div className="githubLogo" ><span><img src="github.png" alt="githubLogo" height={25} width={25} onClick={github}/></span></div>

        </div>
    );
};

export default ButtonGroup;
