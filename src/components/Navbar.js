import React, { useState, useEffect } from 'react';

function Navbar(props) {
  const { changeClass, basicClass, educationClass, workClass } = props;

  return (
    <nav id="navbar">
      <ul id="sections">
        <li id="basic" className={basicClass}>
          <a className="item" href="#Basic" onClick={() => {changeClass('basic')}}>
            Basic Information
          </a>
        </li>
        <li id="education" className={educationClass}>
          <a
            className="item"
            href="#Education"
            onClick={() => {changeClass('education')}}
          >
            Education
          </a>
        </li>
        <li id="work" className={workClass}>
          <a
            className="item"
            href="#Work"
            onClick={() => {changeClass('work')}}
          >
            Work Experience
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
