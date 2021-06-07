import React from 'react'
import uniqid from 'uniqid'

function EducationSectionCV(props) {
  return (
    <div className="education-container">
        <h3>Education</h3>
        {props.totalObject.education.map(item => {
          return(
          <div key={uniqid()}>
            {(item.course) ?
            <p>{item.course} - {item.startDate} - {item.institution}</p> : null}
            
          </div>)
        })}
    </div>
  )
}

export default EducationSectionCV
