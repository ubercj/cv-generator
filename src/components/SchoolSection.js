import React from 'react'
import '../styles/Card.css'

const SchoolSection =  (props) => {
  const { school, degree, gpa, gradDate } = props;

  return (
    <div className="Card">
      <p><span>School:</span> {school}</p>
      <p><span>Degree:</span> {degree}</p>
      <p><span>GPA:</span> {gpa}</p>
      <p><span>Graduation date:</span> {gradDate}</p>
    </div>
  )
}

export default SchoolSection;