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
                <button className="button red" onClick={() => paintButton("sennapaintmain", "#ff0b03")}></button>
                <button className="button blue" onClick={() => paintButton("sennapaintmain", "#010885")}></button>
                <button className="button yellow" onClick={() => paintButton("sennapaintmain", "yellow")}></button>
                <button className="button white" onClick={() => paintButton("sennapaintmain", "#f7f5f5")}></button>
                <button className="button black" onClick={() => paintButton("sennapaintmain", "black")}></button>
            </div>
            <div className="title"><span>Caliper</span></div>
            <div className="items">
                <button className="button green" onClick={() => caliperButton("amdb11_caliper.002", "#0aeb02")}></button>
                <button className="button blue" onClick={() => caliperButton("amdb11_caliper.002", "blue")}></button>
                <button className="button red" onClick={() => caliperButton("amdb11_caliper.002", "red")}></button>
                <button className="button yellow" onClick={() => caliperButton("amdb11_caliper.002", "yellow")}></button>
                <button className="button white" onClick={() => caliperButton("amdb11_caliper.002", "white")}></button>
            </div>
            <div className="title"><span>Dashboard</span></div>
            <div className="items">
                <button className="button blue" onClick={() => rimButton("dashplastic", "blue")}></button>
                <button className="button white" onClick={() => rimButton("dashplastic", "#f7f5f5")}></button>
                <button className="button red" onClick={() => rimButton("dashplastic", "red")}></button>
                <button className="button green" onClick={() => rimButton("dashplastic", "green")}></button>
                <button className="button black" onClick={() => rimButton("dashplastic", "black")}></button>
            </div>
            <div className="title"><span>Interior Fabric</span></div>
            <div className="items">
                <button className="button red" onClick={() => rimButton("alcantara", "red")}></button>
                <button className="button green" onClick={() => rimButton("alcantara", "#0aeb02")}></button>
                <button className="button black" onClick={() => rimButton("alcantara", "black")}></button>
                <button className="button white" onClick={() => rimButton("alcantara", "white")}></button>
                <button className="button brown" onClick={() => rimButton("alcantara", "#F8C794")}></button>
            </div>
            <div className="githubLogo" ><span><img src="github.png" alt="githubLogo" height={25} width={25} onClick={github}/></span></div>

        </div>
    );
};

export default ButtonGroup;
