import React, { useState } from 'react';
import WorkInput from './WorkInput';

function WorkSection(props) {
  const [componentArray, setComponentArray] = useState([0]);
  const [workArray, setWorkArray] = useState([]);
  return (
    <div
      id="Work"
      onClick={() => {
        props.changeClass('work');
      }}
    >
      <h2 className="section-title">Work Experience</h2>
      {componentArray.map((item) => {
        return (
          <WorkInput
            workArray={workArray}
            setWorkArray={setWorkArray}
            key={item}
            index={item}
            totalObject={props.totalObject}
            setTotalObject={props.setTotalObject}
          />
        );
      })}
      <div className="add-entry">
        <button
          onClick={(e) => {
            e.preventDefault();
            setComponentArray((oldArray) => [
              ...oldArray,
              componentArray.length,
            ]);
          }}
        >
          Add Another Entry
        </button>
      </div>
    </div>
  );
}

export default WorkSection;
