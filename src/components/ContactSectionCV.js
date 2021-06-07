import React from 'react'

function ContactSectionCV(props) {

  const {totalObject} = props
  return (
    <div className="contact-section">
        <h2>Contact</h2>
        <div className="info-container">
          <h3>Address:</h3>
          <p>{(totalObject.basic.address) ? totalObject.basic.address : null} </p>
        </div>
        <div className="info-container">
          <h3>Phone:</h3>
          <p>{(totalObject.basic.phone) ? totalObject.basic.phone : null}</p>
        </div>
        <div className="info-container">
          <h3>Email:</h3>
          <p>{(totalObject.basic.email) ? totalObject.basic.email : null}</p>
        </div>
      </div>
  )
}

export default ContactSectionCV
