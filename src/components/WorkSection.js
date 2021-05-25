import React from 'react';

const WorkSection = (props) => {
  const { company, title, reason } = props;

  return (
    <div className="Work">
      <ul>
        <li>Company: {company}</li>
        <li>Title: {title}</li>
        <li>Reason for leaving: {reason}</li>
      </ul>
    </div>
  )
}

export default WorkSection;