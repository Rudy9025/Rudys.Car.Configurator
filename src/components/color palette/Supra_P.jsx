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
                <button className="button red" onClick={() => paintButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001", "#ff0b03")}></button>
                <button className="button blue" onClick={() => paintButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001", "#010885")}></button>
                <button className="button yellow" onClick={() => paintButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001", "yellow")}></button>
                <button className="button white" onClick={() => paintButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001", "#f7f5f5")}></button>
                <button className="button black" onClick={() => paintButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001", "black")}></button>
            </div>
            <div className="title"><span>Caliper</span></div>
            <div className="items">
                <button className="button green" onClick={() => caliperButton("Color_A11.001", "#0aeb02")}></button>
                <button className="button blue" onClick={() => caliperButton("Color_A11.001", "blue")}></button>
                <button className="button red" onClick={() => caliperButton("Color_A11.001", "red")}></button>
                <button className="button yellow" onClick={() => caliperButton("Color_A11.001", "yellow")}></button>
                <button className="button white" onClick={() => caliperButton("Color_A11.001", "white")}></button>
            </div>
            <div className="title"><span>Wheel Rim</span></div>
            <div className="items">
                <button className="button blue" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001", "blue")}></button>
                <button className="button white" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001", "#f7f5f5")}></button>
                <button className="button red" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001", "red")}></button>
                <button className="button green" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001", "green")}></button>
                <button className="button black" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001", "black")}></button>
            </div>
            <div className="title"><span>Interior Fabric</span></div>
            <div className="items">
                <button className="button red" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_leatherRed.001", "red")}></button>
                <button className="button green" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_leatherRed.001", "#0aeb02")}></button>
                <button className="button black" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_leatherRed.001", "black")}></button>
                <button className="button white" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_leatherRed.001", "white")}></button>
                <button className="button brown" onClick={() => rimButton("Toyota_Supra_2020_with_Interior_noTTo3Ds_leatherRed.001", "#F8C794")}></button>
            </div>            <div className="githubLogo" ><span><img src="github.png" alt="githubLogo" height={25} width={25} onClick={github}/></span></div>

        </div>
    );
};

export default ButtonGroup;
