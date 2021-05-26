import React from 'react';

const SchoolSection =  (props) => {
  const { school, degree, gpa, gradDate } = props;

  return (
    <div className="School">
      <ul>
        <li>School: {school}</li>
        <li>Degree: {degree}</li>
        <li>GPA: {gpa}</li>
        <li>Graduation date: {gradDate}</li>
      </ul>
    </div>
  )
}

export default SchoolSection;