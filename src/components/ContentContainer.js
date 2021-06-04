import React from 'react';
import BasicSection from './BasicSection';
import EducationSection from './EducationSection';
import WorkSection from './WorkSection';

function ContentContainer(props) {
  
  return(
    <form className="cv-form">
      <BasicSection changeClass={props.changeClass} totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>{' '}
      <EducationSection changeClass={props.changeClass}  totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>{' '}
      <WorkSection changeClass={props.changeClass} totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>
    </form>
  )
}

export default ContentContainer;
