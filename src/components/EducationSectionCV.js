import React from 'react'
import uniqid from 'uniqid'

function EducationSectionCV(props) {
  return (
    <div className="education-container">
        <h3>Education</h3>
        {props.totalObject.education.map(item => {
          return(
          <span key={uniqid()}>
            {(item.course) ?
            <h4>{item.course} - {item.institution}</h4>: null} {(item.startDate) ? <p> - {item.startDate}</p> : null }
            
          </span>)
        })}
    </div>
  )
}

export default EducationSectionCV
