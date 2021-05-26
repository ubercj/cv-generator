import React from 'react';
import Input from './Input';

const WorkForm =  (props) => {
  const { handleSubmit, handleChange, company, title,
    details, startDate, endDate } = props;

  return (
    <form className="Form" onSubmit={handleSubmit}>
        <Input name='company' label='Company: ' type='text'
        onChange={handleChange} value={company}/>
        <Input name='title' label='Title: ' type='text'
        onChange={handleChange} value={title}/>
        <Input name='details' label='Job Details: ' type='textarea'
        onChange={handleChange} value={details}/>
        <Input name='startDate' label='Start Date: ' type='date'
        onChange={handleChange} value={startDate}/>
        <Input name='endDate' label='End Date: ' type='date'
        onChange={handleChange} value={endDate}/>
        <button type='submit' className='submit'>Submit</button>
      </form>
  )
}

export default WorkForm;