import React from 'react'
import BasicInput from './BasicInput'

function BasicSection(props) {
  return (
    <div id="Basic" onClick={() => {props.changeClass('basic')}}>
      <h2 className="section-title">Basic Information</h2>
      <div>
        <BasicInput totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>
      </div>
      
      
    </div>
  )
}

export default BasicSection
