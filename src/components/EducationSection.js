import React, { useState } from 'react';
import EducationInput from './EducationInput';

function EducationSection(props) {
  const [componentArray, setComponentArray] = useState([0]);
  const [educationArray, setEducationArray] = useState([]);
  
  return (
    <div id="Education" onClick={() => props.changeClass('education')}>
      <h2 className="section-title">Education</h2>
      {componentArray.map((item) => {
        
        return (
          <EducationInput
            educationArray={educationArray}
            setEducationArray={setEducationArray}
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

export default EducationSection;
