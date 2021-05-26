import React from 'react'
import '../styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const SchoolSection =  (props) => {
  const { school, degree, gpa, gradDate, handleEdit, handleDelete } = props;

  return (
    <div className="Card">
      <p><span>School:</span> {school}</p>
      <p><span>Degree:</span> {degree}</p>
      <p><span>GPA:</span> {gpa}</p>
      <p><span>Graduation date:</span> {gradDate}</p>
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