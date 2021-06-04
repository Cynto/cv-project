import React from 'react'
import WorkInput from './WorkInput'

function WorkSection(props) {
  return (
    <div id="work-section" onClick={() => {props.changeClass('work')}}>
      <h2 className="section-title">Work Experience</h2>
      <div>
        <WorkInput totalObject={props.totalObject} setTotalObject={props.setTotalObject} />
      </div>
    </div>
  )
}

export default WorkSection
