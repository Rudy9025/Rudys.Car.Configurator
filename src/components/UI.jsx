/* eslint-disable */
import React, { useEffect } from "react";
import "./css/UI.css";
import Title from './Title';

const UI = ({ onSelectCar }) => {
  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.style.cursor = 'grabbing';
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the scrolling speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const slider = document.querySelector('#slider');
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listeners when component unmounts
    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <Title text="RUDY'S-CAR-CONFIGURATOR"/>
      <div className="car-selection">
        <div className="title"><i>SELECT CAR</i></div>
        <div className="slider" id="slider">
           <p className="item" onClick={() => onSelectCar('Supra')}>Supra</p>
         <p className="item" onClick={() => onSelectCar('BMW')}>Bmw M3</p>
         <p className="item" onClick={() => onSelectCar('GClass')}>G-Wagon</p>
           <p className="item" onClick={() => onSelectCar('SL63')}>SL63-AMG</p>
            <p className="item" onClick={() => onSelectCar('McLaren')}>McLaren</p>
           <p className="item" onClick={() => onSelectCar('RollsRoyce')}>Rolls Royce</p>
           <p className="item" onClick={() => onSelectCar('mercedes_Sclass')}>Mercedes S650</p>
           <p className="item"  onClick={() => onSelectCar('porsche')}>Porsche 911</p>
           <p className="item" onClick={() => onSelectCar('S63_Coupe')}>S63 Coupe</p> 
           <p className="item" onClick={() => onSelectCar('Brabus')}>Brabus G900</p> 
        </div>
       <img src="grab.png" alt="" className="grabico" />
      </div>
    </>
  );
};

export default UI;
