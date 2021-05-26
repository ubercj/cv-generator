import React from 'react';
import Input from './Input';

const WorkForm =  (props) => {
  const { handleSubmit, handleChange, company, title, reason } = props;

  return (
    <form className="Form" onSubmit={handleSubmit}>
        <Input name='company' label='Company: ' type='text'
        onChange={handleChange} value={company}/>
        <Input name='title' label='Title: ' type='text'
        onChange={handleChange} value={title}/>
        <Input name='reason' label='Reason for leaving: ' type='text'
        onChange={handleChange} value={reason}/>
        <button type='submit'>Submit</button>
      </form>
  )
}

export default WorkForm;