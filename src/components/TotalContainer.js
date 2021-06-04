import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ContentContainer from './ContentContainer';

function TotalContainer() {

  
  const [totalObject, setTotalObject] = useState({basic: {}, education: {}, work: {}})
  const [basicClass, setBasicClass] = useState('selected');
  const [educationClass, setEducationClass] = useState('');
  const [workClass, setWorkClass] = useState('');

  const changeClass = (section) => {
    if(section === 'basic') {
      setBasicClass('selected')
      setEducationClass('')
      setWorkClass('')
    }else if(section === 'education') {
      setBasicClass('')
      setEducationClass('selected')
      setWorkClass('')
    }else if(section === 'work') {
      setBasicClass('')
      setEducationClass('')
      setWorkClass('selected')
    }
  }

  useEffect(() => {
    console.log(totalObject)
  }, [totalObject])

  return (
    <div className="total-container">
      <Navbar basicClass={basicClass} educationClass={educationClass} workClass={workClass} changeClass={changeClass} />
      <ContentContainer changeClass={changeClass} totalObject={totalObject} setTotalObject={setTotalObject} />
    </div>
  );
}

export default TotalContainer;
