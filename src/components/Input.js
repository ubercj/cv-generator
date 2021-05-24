import React from 'react'
import '../styles/Input.css'

const Input = (props) => {
  const { name, label, type, onChange, value } = props;

return (
    <div>
      <label htmlFor={name}>
        {label}
        <input
        id={name}
        type={type}
        className="Input"
        value={value}
        placeholder='input goes here'
        onChange={(e) => onChange(e, name)}
        />
      </label>
    </div>
  )
}

export default Input;