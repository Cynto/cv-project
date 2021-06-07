import React, { useState} from 'react';
import Navbar from './Navbar';
import ContentContainer from './ContentContainer';
import PreviewCV from './PreviewCV'

function TotalContainer() {

  
  const [totalObject, setTotalObject] = useState({basic: {}, education: [], work: []})
  const [basicClass, setBasicClass] = useState('selected');
  const [educationClass, setEducationClass] = useState('');
  const [workClass, setWorkClass] = useState('');
  const [previewClass, setPreviewClass] = useState('')

  const changeClass = (section) => {
    if(section === 'basic') {
      setBasicClass('selected')
      setEducationClass('')
      setWorkClass('')
      setPreviewClass('')
    }else if(section === 'education') {
      setBasicClass('')
      setEducationClass('selected')
      setWorkClass('')
      setPreviewClass('')
    }else if(section === 'work') {
      setBasicClass('')
      setEducationClass('')
      setWorkClass('selected')
      setPreviewClass('')
    }else if(section === 'preview') {
      setBasicClass('')
      setEducationClass('')
      setWorkClass('')
      setPreviewClass('selected')
    }
  }

  return (
    <div className="total-container">
      <Navbar previewClass={previewClass} basicClass={basicClass} educationClass={educationClass} workClass={workClass} changeClass={changeClass} />
      <ContentContainer changeClass={changeClass} totalObject={totalObject} setTotalObject={setTotalObject} />
      <PreviewCV totalObject={totalObject}/>
    </div>
  );
}

export default TotalContainer;
