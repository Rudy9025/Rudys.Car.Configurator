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
                <button className="button red" onClick={() => paintButton("SL63_paint", "#ff0b03")}></button>
                <button className="button blue" onClick={() => paintButton("SL63_paint", "#010885")}></button>
                <button className="button yellow" onClick={() => paintButton("SL63_paint", "yellow")}></button>
                <button className="button white" onClick={() => paintButton("SL63_paint", "#f7f5f5")}></button>
                <button className="button black" onClick={() => paintButton("SL63_paint", "black")}></button>
            </div>
            <div className="title"><span>Caliper</span></div>
            <div className="items">
                <button className="button green" onClick={() => caliperButton("amdb11_caliper.002", "#0aeb02")}></button>
                <button className="button blue" onClick={() => caliperButton("amdb11_caliper.002", "blue")}></button>
                <button className="button red" onClick={() => caliperButton("amdb11_caliper.002", "red")}></button>
                <button className="button yellow" onClick={() => caliperButton("amdb11_caliper.002", "yellow")}></button>
                <button className="button white" onClick={() => caliperButton("amdb11_caliper.002", "white")}></button>
            </div>
            <div className="title"><span>Carbon Side Skirt</span></div>
            <div className="items">
                <button className="button blue" onClick={() => rimButton("SL63_carbon", "#010885")}></button>
                <button className="button white" onClick={() => rimButton("SL63_carbon", "#f7f5f5")}></button>
                <button className="button yellow" onClick={() => rimButton("SL63_carbon", "yellow")}></button>
                <button className="button red" onClick={() => rimButton("SL63_carbon", "#850101")}></button>
                <button className="button black" onClick={() => rimButton("SL63_carbon", "black")}></button>
            </div>
            <div className="title"><span>Interior Fabric</span></div>
            <div className="items">
                <button className="button brown" onClick={() => rimButton("SL63_white-leather", "red")}></button>
                <button className="button purple" onClick={() => rimButton("SL63_white-leather", "purple")}></button>
                <button className="button black" onClick={() => rimButton("SL63_white-leather", "black")}></button>
                <button className="button white" onClick={() => rimButton("SL63_white-leather", "white")}></button>
                <button className="button yellow" onClick={() => rimButton("SL63_white-leather", "yellow")}></button>
            </div>            <div className="githubLogo" ><span><img src="github.png" alt="githubLogo" height={25} width={25} onClick={github}/></span></div>

        </div>
    );
};

export default ButtonGroup;
