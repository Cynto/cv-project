import React, { useState, useRef} from 'react';
import Navbar from './Navbar';
import ContentContainer from './ContentContainer';
import PreviewCV from './PreviewCV'
import { useReactToPrint } from 'react-to-print';


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
  const componentRef = useRef();
  const printCV = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="total-container">
      <Navbar printCV={printCV} previewClass={previewClass} basicClass={basicClass} educationClass={educationClass} workClass={workClass} changeClass={changeClass} />
      <ContentContainer changeClass={changeClass} totalObject={totalObject} setTotalObject={setTotalObject} />
      <div className="cv-container" ref={componentRef}>
        <PreviewCV totalObject={totalObject}/>
      </div>
    </div>
  );
}

export default TotalContainer;
