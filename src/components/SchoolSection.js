import React from 'react'
import '../styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const SchoolSection =  (props) => {
  const { school, degree, gpa, gradDate, handleEdit, handleDelete } = props;

  const prettyDate = (date) => {
    if (date) {
      let dateArr = date.split('-');
      let uglyDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
      return uglyDate.toDateString().slice(3);
    }
  }

  return (
    <div className="Card">
      <p><span>School:</span> {school}</p>
      <p><span>Degree:</span> {degree}</p>
      <p><span>GPA:</span> {gpa}</p>
      <p><span>Graduation date:</span> {prettyDate(gradDate)}</p>
      <div>
        <FontAwesomeIcon icon={faPencilAlt} className='icon'
        onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} className='icon'
        onClick={handleDelete} />
      </div>
    </div>
  )
}

export default SchoolSection;