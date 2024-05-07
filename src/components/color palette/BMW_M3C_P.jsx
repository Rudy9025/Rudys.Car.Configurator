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
                <button className="button red" onClick={() => paintButton("m3g81law", "#850101")}></button>
                <button className="button blue" onClick={() => paintButton("m3g81law", "#010885")}></button>
                <button className="button green" onClick={() => paintButton("m3g81law", "#00432c")}></button>
                <button className="button white" onClick={() => paintButton("m3g81law", "#f7f5f5")}></button>
                <button className="button black" onClick={() => paintButton("m3g81law", "black")}></button>
            </div>
            <div className="title"><span>Caliper</span></div>
            <div className="items">
                <button className="button green" onClick={() => caliperButton("amdb11_caliper.002", "green")}></button>
                <button className="button blue" onClick={() => caliperButton("amdb11_caliper.002", "blue")}></button>
                <button className="button red" onClick={() => caliperButton("amdb11_caliper.002", "red")}></button>
                <button className="button black" onClick={() => caliperButton("amdb11_caliper.002", "black")}></button>
                <button className="button white" onClick={() => caliperButton("amdb11_caliper.002", "white")}></button>
            </div>
            <div className="title"><span>Wheel Rim</span></div>
            <div className="items">
                <button className="button blue" onClick={() => rimButton("m3g81law_Wheel1A_Rim", "#010885")}></button>
                <button className="button white" onClick={() => rimButton("m3g81law_Wheel1A_Rim", "#f7f5f5")}></button>
                <button className="button yellow" onClick={() => rimButton("m3g81law_Wheel1A_Rim", "yellow")}></button>
                <button className="button red" onClick={() => rimButton("m3g81law_Wheel1A_Rim", "#850101")}></button>
                <button className="button black" onClick={() => rimButton("m3g81law_Wheel1A_Rim", "black")}></button>
            </div>
            <div className="title"><span>Interior Fabric</span></div>
            <div className="items">
                <button className="button orange" onClick={() => rimButton("m3g81law_Interior_Zone1", "#fc4800")}></button>
                <button className="button cyan" onClick={() => rimButton("m3g81law_Interior_Zone1", "cyan")}></button>
                <button className="button black" onClick={() => rimButton("m3g81law_Interior_Zone1", "black")}></button>
                <button className="button white" onClick={() => rimButton("m3g81law_Interior_Zone1", "#f7f5f5")}></button>
                <button className="button yellow" onClick={() => rimButton("m3g81law_Interior_Zone1", "yellow")}></button>
            </div>
            <div className="githubLogo" ><span><img src="github.png" alt="githubLogo" height={25} width={25} onClick={github}/></span></div>
        </div>
    );
};

export default ButtonGroup;
