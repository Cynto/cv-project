import React from 'react';
import BasicSection from './BasicSection';
import EducationSection from './EducationSection';
import WorkSection from './WorkSection';

function ContentContainer(props) {
  if (props.currentSection === 'basic') {
    return (
      <form className="cv-form">
        <BasicSection totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>{' '}
      </form>
    );
  } else if (props.currentSection === 'education') {
    return (
      <form className="cv-form">
        <EducationSection totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>{' '}
      </form>
    );
  } else
    return (
      <form className="cv-form">
        <WorkSection totalObject={props.totalObject} setTotalObject={props.setTotalObject}/>
      </form>
    );
}

export default ContentContainer;
