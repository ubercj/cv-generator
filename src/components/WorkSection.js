import React from 'react'
import '../styles/Card.css'

const WorkSection = (props) => {
  const { company, title, details, startDate, endDate } = props;

  return (
    <div className="Card">
      <p><span>Company:</span> {company}</p>
      <p><span>Title:</span> {title}</p>
      <p><span>Job Details:</span> {details}</p>
      <p><span>Start Date:</span> {startDate}</p>
      <p><span>End Date:</span> {endDate}</p>
    </div>
  )
}

export default WorkSection;