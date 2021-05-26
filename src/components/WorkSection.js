import React from 'react'
import '../styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const WorkSection = (props) => {
  const { company, title, details, startDate, endDate,
    handleEdit, handleDelete } = props;

  return (
    <div className="Card">
      <p><span>Company:</span> {company}</p>
      <p><span>Title:</span> {title}</p>
      <p><span>Job Details:</span> {details}</p>
      <p><span>Start Date:</span> {startDate}</p>
      <p><span>End Date:</span> {endDate}</p>
      <div>
        <FontAwesomeIcon icon={faPencilAlt} className='icon'
        onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} className='icon'
        onClick={handleDelete} />
      </div>
    </div>
  )
}

export default WorkSection;