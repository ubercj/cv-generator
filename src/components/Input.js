import React, { useState } from 'react'
import '../styles/Input.css'

const Input = (props) => {
  const [value, setValue] = useState('');

  const { name, type } = props;

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <label htmlFor={name}>
      {name} 
      <input
      id={name}
      type={type}
      className="Input"
      value={value}
      placeholder='input goes here'
      onChange={handleChange}
      />
    </label>
  )
}

export default Input;