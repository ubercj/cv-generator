import React from 'react';
import Input from './Input';

const InfoForm =  (props) => {
  const { handleSubmit, handleChange, name, email, phone } = props;

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <Input name='name' label='Name: ' type='text'
      onChange={handleChange} value={name}/>
      <Input name='email' label='Email: ' type='email'
      onChange={handleChange} value={email}/>
      <Input name='phone' label='Phone: ' type='tel'
      onChange={handleChange} value={phone}/>
      <button type='submit' className='submit'>Submit</button>
    </form>
  )
}

export default InfoForm;