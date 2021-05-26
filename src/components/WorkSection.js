import React from 'react';

const WorkSection = (props) => {
  const { company, title, details, startDate, endDate } = props;

  return (
    <div className="Work">
      <ul>
        <li>Company: {company}</li>
        <li>Title: {title}</li>
        <li>Job Details: {details}</li>
        <li>Start Date: {startDate}</li>
        <li>End Date: {endDate}</li>
      </ul>
    </div>
  )
}

export default WorkSection;