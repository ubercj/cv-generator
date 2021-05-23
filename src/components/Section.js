import React, { useState } from 'react'
import '../styles/Section.css'
import '../styles/Form.css'
import Input from './Input';

const Section = (props) => {
  const [title, setTitle] = useState('to hold info');

  const { otherName, labelNames } = props;

  return (
    <div className="Section">
      <div>I'm a section! My purpose is {title}</div>
      <button onClick={() => setTitle(otherName)}>Change the title</button>
      <form className="Form">
        <Input name={labelNames[0]}/>
        <Input name={labelNames[1]}/>
        <Input name={labelNames[2]}/>
      </form>
    </div>
  )
}

export default Section;