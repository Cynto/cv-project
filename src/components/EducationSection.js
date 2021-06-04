import React, { useState } from 'react'
import EducationInput from './EducationInput'

function EducationSection(props) {
  const [educationArray, setEducationArray] = useState([])
  return (
    <div id="education-section" onClick={() => props.changeClass('education')}>
      <h2 className="section-title">Education</h2>
      <div>
        <EducationInput index={0} totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>
      </div>
      {educationArray.map(item => {
        return(<div>
          <EducationInput key={item} index={item} totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>
        </div>)
      })}
      <div className="add-entry">
        <button onClick={(e) => {e.preventDefault(); setEducationArray((oldArray) => [...oldArray, educationArray.length + 1])}}>Add Another Entry</button>
      </div>
    </div>
  )
}

export default EducationSection
