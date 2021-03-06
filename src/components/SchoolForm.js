import React from 'react';
import Input from './Input';

const SchoolForm =  (props) => {
  const { handleSubmit, handleChange, school, degree,
    gpa, gradDate, handleCancel} = props;

  const gpaConstraints = ['0', '4.0', '.1']

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <Input name='school' label='School: ' type='text'
      onChange={handleChange} value={school}/>
      <Input name='degree' label='Degree: ' type='text'
      onChange={handleChange} value={degree}/>
      <Input name='gpa' label='GPA: ' type='number'
      onChange={handleChange} value={gpa} options={gpaConstraints}/>
      <Input name='gradDate' label='Graduation date: ' type='date'
      onChange={handleChange} value={gradDate}/>
      <div className='buttons'>
        <button type='submit' className='submit'>Submit</button>
        <button onClick={handleCancel} className='cancel'>Cancel</button>
      </div>
    </form>
  )
}

export default SchoolForm;