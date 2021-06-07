import React from 'react'
import ContactSectionCV from './ContactSectionCV'

function LeftSideCV(props) {

  const {totalObject} = props

  return (
    <div className="left-cv">
      <div className="name-container">
        <h1>{(totalObject.basic.name) ? totalObject.basic.name : null}</h1>
      </div>
      <img className="profile-pic" src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="default profile"></img>
      
      <ContactSectionCV totalObject={totalObject} />
    </div>
  )
}

export default LeftSideCV
