import React, { useState } from 'react';

function EducationInput(props) {
  const [educationObject, setEducationObject] = useState({});

  const educationArray = []

  const handleChange = (e) => {
    const input = e.target.value;
    const id = e.target.id;
    
    
    if (id === 'course') {
      setEducationObject({ ...educationObject, course: input });
    } else if (id === 'institution') {
      setEducationObject({ ...educationObject, institution: input });
    } else if (id === 'start-date') {
      setEducationObject({ ...educationObject, startDate: input });
    } else setEducationObject({ ...educationObject, endDate: input });
    
    educationArray[props.index] = educationObject
    console.log(educationArray[0])
    props.setTotalObject({ ...props.totalObject, education: educationArray });
  };

  return (
    <div className="field-input-container">
      
      <div className="field-input">
        <label>Course Name</label>
        <input
          id="course"
          type="text"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="field-input">
        <label>Institution Name</label>
        <input
          id="institution"
          type="text"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="field-input">
        <label>Start Date</label>
        <input
          id="start-date"
          type="text"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="field-input">
        <label>End Date</label>
        <input
          id="end-date"
          type="text"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
    </div>
  );
}

export default EducationInput;
