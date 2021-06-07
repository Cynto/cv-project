import React, { useState, useEffect } from 'react';

function BasicInput(props) {
  const [basicObject, setBasicObject] = useState({});

  const { setTotalObject, totalObject } = props;

  const handleChange = (e) => {
    const input = e.target.value;
    const id = e.target.id;
    if (id === 'name') {
      setBasicObject({ ...basicObject, name: input });
    } else if (id === 'email') {
      setBasicObject({ ...basicObject, email: input });
    } else if (id === 'phone') {
      setBasicObject({ ...basicObject, phone: input });
    } else if (id === 'address') {
      setBasicObject({ ...basicObject, address: input });
    } else setBasicObject({ ...basicObject, desc: input });
  };
  useEffect(() => {
    setTotalObject({ ...totalObject, basic: basicObject });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basicObject]);

  return (
    <div className="field-input-container">
      <div className="field-input">
        <label>Full Name</label>
        <input
          id="name"
          type="text"
          maxLength="100"
          onChange={(e) => handleChange(e)}
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
      <div className="field-input">
        <label>Description</label>
        <textarea
          name="description"
          id="desc"
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
    </div>
  );
}

export default BasicInput;
