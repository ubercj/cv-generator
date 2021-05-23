import React, { useState } from 'react'
import '../styles/Section.css'
import '../styles/Form.css'
import Input from './Input';

const Section = (props) => {

  const { fields, values, update } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log(e.target.elements);
  }

  return (
    <div className="Section">
      <div>I'm a section!</div>
      <form className="Form" onSubmit={handleSubmit}>
        <Input name={fields[0].label} type={fields[0].type} update={update}/>
        <Input name={fields[1].label} type={fields[1].type} update={update}/>
        <Input name={fields[2].label} type={fields[2].type} update={update}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Section;