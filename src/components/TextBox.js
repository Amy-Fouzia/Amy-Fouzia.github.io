import React from 'react';
import '../App.css';
import Dropdown from './Dropdown'; // Import the Dropdown component
import { NYU } from './Data'; // Adjust the path as needed

const TextBox = ({ text }) => {
  let renderedText;

  // Determine which text to render based on the prop value
  if (text === 'homeText') {
    renderedText = 'This is home text.';
  } else if (text === 'resumeText') {
    renderedText = <Dropdown title="EDUCATION" data={NYU} />;
  } else if (text === 'contactText') {
    renderedText = 'This is contact text.';
  } else {
    renderedText = 'No text specified.';
  }

  return (
    <div className="textBox">
      <div className="textBox-content">{renderedText}</div>
    </div>
  );
};

export default TextBox;
