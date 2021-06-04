import React from 'react'
import EducationInput from './EducationInput'

function EducationSection(props) {
  return (
    <div id="education-section">
      <h2 className="section-title">Education</h2>
      <div>
        <EducationInput totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>
      </div>
    </div>
  )
}

export default EducationSection
