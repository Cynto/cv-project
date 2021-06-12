import React, { useState, useEffect } from 'react';

function WorkInput(props) {
  const [workObject, setWorkObject] = useState({});
  const [toDelete, setToDelete] = useState(false);

  const { totalObject, setTotalObject, workArray, setWorkArray } = props;

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
  };

  useEffect(() => {
    if (toDelete === true) {
      setWorkArray((oldArray) => {
        oldArray.splice(props.index, 1);

        return oldArray;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDelete]);

  useEffect(() => {
    setWorkArray((oldArray) => {
      oldArray[props.index] = workObject;
      return oldArray;
    });
    setTotalObject({ ...totalObject, work: workArray });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workObject, workArray]);

  useEffect(() => {
    setTotalObject({ ...totalObject, work: workArray });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDelete]);

  if (toDelete === false) {
    return (
      <div>
        <div className="field-input-container">
          <div className="field-input">
            <label>Job Title</label>
            <input
              id="job-title"
              type="text"
              onChange={(e) => handleChange(e)}
            ></input>
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
        <div className="delete-button-container">
          {props.index >= 1 ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setToDelete(true);
              }}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    );
  } else return <div></div>;
}

export default WorkInput;
