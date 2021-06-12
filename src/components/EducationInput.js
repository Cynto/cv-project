import React, { useState, useEffect } from 'react';

function EducationInput(props) {
  const [educationObject, setEducationObject] = useState({});
  const [toDelete, setToDelete] = useState(false);

  const { setTotalObject, totalObject, educationArray } = props;

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

    
  };

  useEffect(() => {
    if(toDelete === true) {
      
      props.setEducationArray((oldArray) => {
        oldArray.splice(props.index, 1)
        console.log(oldArray)
        return oldArray
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDelete])

  useEffect(() => {
    props.setEducationArray((oldArray) => {
      oldArray[props.index] = educationObject;
      return oldArray;
    });
    setTotalObject({ ...totalObject, education: educationArray });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationObject, educationArray]);

  useEffect(() => {
    setTotalObject({ ...totalObject, education: educationArray });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDelete])

  if(toDelete === false) {  
    return (
    <div>
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
      <div className="delete-button-container">
        {(props.index >= 1) ? <button onClick={(e) => {
          e.preventDefault();
          setToDelete(true)}}>Delete</button> : null} 
      </div>
    </div>
  );
  }else return <div></div>
}

export default EducationInput;
