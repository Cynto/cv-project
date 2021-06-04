import React, { useState, useEffect } from 'react';

function Navbar(props) {
  const [basicClass, setBasicClass] = useState('selected');
  const [educationClass, setEducationClass] = useState('');
  const [workClass, setWorkClass] = useState('');

  const setCurrentSection = props.setCurrentSection;

  

  return (
    <nav id="navbar">
      <ul id="sections">
        <li id="basic" className={basicClass}>
          <a
            className="item"
            href="#Basic"
            onClick={() => {
              setBasicClass('selected');
              setEducationClass('');
              setWorkClass('');
              setCurrentSection('basic')
            }}
          >
            Basic Information
          </a>
        </li>
        <li id="education" className={educationClass}>
          <a
            className="item"
            href="#Education"
            onClick={() => {
              setBasicClass('');
              setEducationClass('selected');
              setWorkClass('');
              setCurrentSection('education')
            }}
          >
            Education
          </a>
        </li>
        <li id="work" className={workClass}>
          <a
            className="item"
            href="#Work"
            onClick={() => {
              setBasicClass('');
              setEducationClass('');
              setWorkClass('selected');
              setCurrentSection('work')
            }}
          >
            Work Experience
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
