import React from 'react'
import EducationSectionCV from './EducationSectionCV'
import WorkSectionCV from './WorkSectionCV'



function MainSectionCV(props) {

  const { totalObject} = props
  return (
    <div className="main-section-cv">
      <div className="summary-container">
        <h3>Summary</h3>
        <p>{(totalObject.basic.desc) ? totalObject.basic.desc : null}</p>
      </div>
      <EducationSectionCV totalObject={totalObject}/> 
      <WorkSectionCV totalObject={totalObject}/>
    </div>
  )
}

export default MainSectionCV
