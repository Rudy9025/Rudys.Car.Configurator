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
                <button className="button red" onClick={() => paintButton("bodypaint", "#ff0000")}></button>
                <button className="button blue" onClick={() => paintButton("bodypaint", "#010885")}></button>
                <button className="button green" onClick={() => paintButton("bodypaint", "#0aeb02")}></button>
                <button className="button white" onClick={() => paintButton("bodypaint", "#f7f5f5")}></button>
                <button className="button black" onClick={() => paintButton("bodypaint", "black")}></button>
            </div>
            <div className="title"><span>Caliper</span></div>
            <div className="items">
                <button className="button green" onClick={() => caliperButton("vehicle_generic_smallspecmap__PAINT_2", "#0aeb02")}></button>
                <button className="button blue" onClick={() => caliperButton("vehicle_generic_smallspecmap__PAINT_2", "blue")}></button>
                <button className="button red" onClick={() => caliperButton("vehicle_generic_smallspecmap__PAINT_2", "red")}></button>
                <button className="button yellow" onClick={() => caliperButton("vehicle_generic_smallspecmap__PAINT_2", "yellow")}></button>
                <button className="button white" onClick={() => caliperButton("vehicle_generic_smallspecmap__PAINT_2", "white")}></button>
            </div>
            <div className="title"><span>Wheel Rim</span></div>
            <div className="items">
                <button className="button blue" onClick={() => rimButton("AMG_wheels_color", "#010885")}></button>
                <button className="button white" onClick={() => rimButton("AMG_wheels_color", "#f7f5f5")}></button>
                <button className="button yellow" onClick={() => rimButton("AMG_wheels_color", "yellow")}></button>
                <button className="button red" onClick={() => rimButton("AMG_wheels_color", "#850101")}></button>
                <button className="button black" onClick={() => rimButton("AMG_wheels_color", "black")}></button>
            </div>
            <div className="title"><span>Interior Fabric</span></div>
            <div className="items">
                <button className="button orange" onClick={() => rimButton("leatherbmp2", "#fc4800")}></button>
                <button className="button cyan" onClick={() => rimButton("leatherbmp2", "cyan")}></button>
                <button className="button black" onClick={() => rimButton("leatherbmp2", "black")}></button>
                <button className="button green" onClick={() => rimButton("leatherbmp2", "#185200")}></button>
                <button className="button yellow" onClick={() => rimButton("leatherbmp2", "yellow")}></button>
            </div>
            <div className="githubLogo" ><span><img src="github.png" alt="githubLogo" height={25} width={25} onClick={github}/></span></div>

        </div>
    );
};

export default ButtonGroup;
