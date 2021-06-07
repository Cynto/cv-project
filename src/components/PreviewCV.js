import React from 'react'
import LeftSideCV from './LeftSideCV'
import MainSectionCV from './MainSectionCV'

function PreviewCV(props) {
  return (
    <div id="Preview">
      <LeftSideCV totalObject={props.totalObject}/>
      <MainSectionCV totalObject={props.totalObject} />
    </div>
  )
}

export default PreviewCV
