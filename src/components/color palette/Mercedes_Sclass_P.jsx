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
                <button className="button blue" onClick={() => paintButton("sw222_paint", "#010885")}></button>
                <button className="button green" onClick={() => paintButton("sw222_paint", "green")}></button>
                <button className="button white" onClick={() => paintButton("sw222_paint", "#f7f5f5")}></button>
                <button className="button red" onClick={() => paintButton("sw222_paint", "#ff0b03")}></button>
                <button className="button black" onClick={() => paintButton("sw222_paint", "black")}></button>
            </div>
            <div className="title"><span>Caliper</span></div>
            <div className="items">
                <button className="button blue" onClick={() => caliperButton("amdb11_caliper.001", "blue")}></button>
                <button className="button green" onClick={() => caliperButton("amdb11_caliper.001", "#0aeb02")}></button>
                <button className="button red" onClick={() => caliperButton("amdb11_caliper.001", "red")}></button>
                <button className="button yellow" onClick={() => caliperButton("amdb11_caliper.001", "yellow")}></button>
                <button className="button white" onClick={() => caliperButton("amdb11_caliper.001", "white")}></button>
            </div>
            <div className="title"><span>Wheel Rim</span></div>
            <div className="items">
                <button className="button white" onClick={() => rimButton("sw222_main_alt_2.028", "#f7f5f5")}></button>
                <button className="button red" onClick={() => rimButton("sw222_main_alt_2.028", "red")}></button>
                <button className="button yellow" onClick={() => rimButton("sw222_main_alt_2.028", "yellow")}></button>
                <button className="button black" onClick={() => rimButton("sw222_main_alt_2.028", "black")}></button>
                <button className="button blue" onClick={() => rimButton("sw222_main_alt_2.028", "blue")}></button>
            </div>
            <div className="title"><span>Interior Fabric</span></div>
            <div className="items">
                <button className="button red" onClick={() => rimButton("sw222_amg_texture28", "red")}></button>
                <button className="button green" onClick={() => rimButton("sw222_amg_texture28", "#0aeb02")}></button>
                <button className="button black" onClick={() => rimButton("sw222_amg_texture28", "black")}></button>
                <button className="button white" onClick={() => rimButton("sw222_amg_texture28", "white")}></button>
                <button className="button brown" onClick={() => rimButton("sw222_amg_texture28", "#F8C794")}></button>
            </div>            <div className="githubLogo" ><span><img src="github.png" alt="githubLogo" height={25} width={25} onClick={github}/></span></div>

        </div>
    );
};

export default ButtonGroup;
