/* eslint-disable */
import React from 'react';
import './css/Title.css';

const Title = ({ text }) => {
  return (
    <div className="waviy">
      {text.split('').map((char, index) => (
        <span key={index} style={{'--i': index + 1}}>{char}</span>
      ))}
    </div>
  );
};

export default Title;
