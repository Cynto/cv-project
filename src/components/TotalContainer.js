import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ContentContainer from './ContentContainer';

function TotalContainer() {

  const [currentSection, setCurrentSection] = useState('basic');
  const [totalObject, setTotalObject] = useState({basic: {}, education: {}, work: {}})

  useEffect(() => {
    console.log(totalObject)
  }, [totalObject])

  return (
    <div className="total-container">
      <Navbar setCurrentSection={setCurrentSection}/>
      <ContentContainer totalObject={totalObject} setTotalObject={setTotalObject} currentSection={currentSection}/>
    </div>
  );
}

export default TotalContainer;
