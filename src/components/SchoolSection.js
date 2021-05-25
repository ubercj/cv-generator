import React from 'react';

const SchoolSection =  (props) => {
  const { school, degree, gpa } = props;

  return (
    <div className="School">
      <ul>
        <li>School: {school}</li>
        <li>Degree: {degree}</li>
        <li>GPA: {gpa}</li>
      </ul>
    </div>
  )
}

export default SchoolSection;