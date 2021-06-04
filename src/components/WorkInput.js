import React, { useState } from 'react';

function WorkInput(props) {
  const [workObject, setWorkObject] = useState({});

  const handleChange = (e) => {
    const input = e.target.value;
    const id = e.target.id;
    if (id === 'job-title') {
      setWorkObject({ ...workObject, title: input });
    } else if (id === 'company') {
      setWorkObject({ ...workObject, company: input });
    } else if (id === 'start-date') {
      setWorkObject({ ...workObject, start: input });
    } else setWorkObject({ ...workObject, end: input });

    props.setTotalObject({ ...props.totalObject, work: workObject });
  };

  return (
    <div className="field-input-container">
      
      <div className="field-input">
        <label>Job Title</label>
        <input id="job-title" type="text" onChange={(e) => handleChange(e)}></input>
      </div>
      <div className="field-input">
        <label>Company Name</label>
        <input
          id="company"
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

export default WorkInput;
