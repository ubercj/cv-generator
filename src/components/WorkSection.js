import React from 'react'
import '../styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const WorkSection = (props) => {
  const { company, title, details, startDate, endDate,
    handleEdit, handleDelete } = props;

  const prettyDate = (date) => {
    if (date) {
      let dateArr = date.split('-');
      let uglyDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
      return uglyDate.toDateString().slice(3);
    }
  }

  return (
    <div className="Card">
      <p><span>Company:</span> {company}</p>
      <p><span>Title:</span> {title}</p>
      <p><span>Job Details:</span> {details}</p>
      <p><span>Start Date:</span> {prettyDate(startDate)}</p>
      <p><span>End Date:</span> {prettyDate(endDate)}</p>
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