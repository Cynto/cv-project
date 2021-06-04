import React, { useState } from 'react';

function BasicInput(props) {
  const [basicObject, setBasicObject] = useState({});

  const handleChange = (e) => {
    const input = e.target.value;
    const id = e.target.id;
    if (id === 'name') {
      setBasicObject({ ...basicObject, name: input });
    } else if (id === 'email') {
      setBasicObject({ ...basicObject, email: input });
    } else if (id === 'phone') {
      setBasicObject({ ...basicObject, phone: input });
    } else setBasicObject({ ...basicObject, address: input });
    
    props.setTotalObject({...props.totalObject, basic: basicObject})
  };

  return (
    <div className="field-input-container">
      <div className="field-input">
        <label>Full Name</label>
        <input
          id="name"
          type="text"
          maxLength="100"
          onChange={(e) => handleChange(e)}
          placeholder={() => basicObject.name}
        ></input>
      </div>
      <div className="field-input">
        <label>E-mail Address</label>
        <input
          id="email"
          type="email"
          maxLength="100"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="field-input">
        <label>Phone Number</label>
        <input
          id="phone"
          type="tel"
          maxLength="100"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="field-input">
        <label>Address</label>
        <input
          id="address"
          type="text"
          maxLength="100"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
    </div>
  );
}

export default BasicInput;
