import React from 'react';
import uniqid from 'uniqid'

function WorkSectionCV(props) {
  return (
    <div className="work-container">
      <h3>Work Experience</h3>

      {props.totalObject.work.map((item) => {
        return (
          <span key={uniqid()}>
            
           {(item.title) ? <h4>{item.title} - {item.company} - </h4> : null }{(item.start) ? <p>{item.start} to {item.end}</p> : null}
            
          </span>
        );
      })}
    </div>
  );
}

export default WorkSectionCV;
