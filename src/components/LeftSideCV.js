import React from 'react'
import ContactSectionCV from './ContactSectionCV'

function LeftSideCV(props) {

  const {totalObject} = props

  const nameArray = totalObject.basic.name.split(' ')
  console.log(nameArray)

  return (
    <div className="left-cv">
      <div className="name-container">
        <h1>{(nameArray[0]) ? nameArray[0]: null}</h1>
        <h1 className="surname">{(nameArray[1] ? nameArray[1]: null)}</h1>
      </div>
      <img className="profile-pic" src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="default profile"></img>
      
      <ContactSectionCV totalObject={totalObject} />
    </div>
  )
}

export default LeftSideCV
