import React from 'react'
import '../styles/Input.css'

const Input = (props) => {
  const { name, label, type, onChange, value, options } = props;

  const renderWithOptions = () => {
    if (type === 'number') {
      return (
        <input
          id={name}
          type={type}
          className="Input"
          value={value}
          placeholder='input goes here'
          onChange={(e) => onChange(e, name)}
          min={options[0]}
          max={options[1]}
          step={options[2]}
        />
      )
    } else {
        return (
          <input
            id={name}
            type={type}
            className="Input"
            value={value}
            placeholder='input goes here'
            onChange={(e) => onChange(e, name)}
          />
        )
      }
  }

  return (
    <label htmlFor={name}>
      {label}
      {renderWithOptions()}
    </label>
  )
}

export default Input;