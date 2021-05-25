import React, { useState } from 'react'
import './styles/App.css'
import './styles/Section.css'
import Input from './components/Input'

const App = () => {
  // Info section
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // School section
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [gpa, setGpa] = useState('');
  // Work section
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [reason, setReason] = useState('');
  // For conditional rendering
  const [infoSubmitted, setInfoSubmitted] = useState(false);
  const [schoolSubmitted, setSchoolSubmitted] = useState(false);
  const [workSubmitted, setWorkSubmitted] = useState(false);

  const handleChange = (e, name) => {
    let newValue = e.target.value;

    switch (name) {
      case 'name':
        setName(newValue);
        break;
      case 'email':
        setEmail(newValue);
        break;
      case 'phone':
        setPhone(newValue);
        break;
      case 'school':
        setSchool(newValue);
        break;
      case 'degree':
        setDegree(newValue);
        break;
      case 'gpa':
        setGpa(newValue);
        break;
      case 'company':
        setCompany(newValue);
        break;
      case 'title':
        setTitle(newValue);
        break;
      case 'reason':
        setReason(newValue);
        break;
      default:
        console.log('Whoops, something is breaking');
        break;
    }
  }

  const handleSubmit = (e, cb) => {
    e.preventDefault();
    cb(true);
  }

  /*===================
  Conditional Rendering
  ====================*/

  const infoForm = (
    <section className="Section">
      <h3>I'm a section! Fill out this form:</h3>
      <form className="Form" onSubmit={(e) => handleSubmit(e, setInfoSubmitted)}>
        <Input name='name' label='Name: ' type='text'
        onChange={handleChange} value={name}/>
        <Input name='email' label='Email: ' type='email'
        onChange={handleChange} value={email}/>
        <Input name='phone' label='Phone: ' type='tel'
        onChange={handleChange} value={phone}/>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )

  const infoSection = (
    <section className="Section">
      <h3>I'm a section that has been submitted!</h3>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
      </ul>
      <button onClick={() => setInfoSubmitted(false)}>Edit</button>
    </section>
  )

  const renderInfoForm = () => {
    if (infoSubmitted) {
      return infoSection;
    } else {
      return infoForm;
    }
  }

  const schoolForm = (
    <section className="Section">
      <h3>I'm a section! Fill out this form:</h3>
      <form className="Form" onSubmit={(e) => handleSubmit(e, setSchoolSubmitted)}>
        <Input name='school' label='School: ' type='text'
        onChange={handleChange} value={school}/>
        <Input name='degree' label='Degree: ' type='text'
        onChange={handleChange} value={degree}/>
        <Input name='gpa' label='GPA: ' type='number'
        onChange={handleChange} value={gpa}/>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )

  const schoolSection = (
    <section className="Section">
      <h3>I'm a section that has been submitted!</h3>
      <ul>
        <li>School: {school}</li>
        <li>Degree: {degree}</li>
        <li>GPA: {gpa}</li>
      </ul>
      <button onClick={() => setSchoolSubmitted(false)}>Edit</button>
    </section>
  )

  const renderSchoolForm = () => {
    if (schoolSubmitted) {
      return schoolSection;
    } else {
      return schoolForm;
    }
  }

  const workForm = (
    <section className="Section">
      <h3>I'm a section! Fill out this form:</h3>
      <form className="Form" onSubmit={(e) => handleSubmit(e, setWorkSubmitted)}>
        <Input name='company' label='Company: ' type='text'
        onChange={handleChange} value={company}/>
        <Input name='title' label='Title: ' type='text'
        onChange={handleChange} value={title}/>
        <Input name='reason' label='Reason for leaving: ' type='text'
        onChange={handleChange} value={reason}/>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )

  const workSection = (
    <section className="Section">
      <h3>I'm a section that has been submitted!</h3>
      <ul>
        <li>Company: {company}</li>
        <li>Title: {title}</li>
        <li>Reason for leaving: {reason}</li>
      </ul>
      <button onClick={() => setWorkSubmitted(false)}>Edit</button>
    </section>
  )

  const renderWorkForm = () => {
    if (workSubmitted) {
      return workSection;
    } else {
      return workForm;
    }
  }

  const unsubmit = () => {
    setInfoSubmitted(false);
    setSchoolSubmitted(false);
    setWorkSubmitted(false);
  }

  if (infoSubmitted && schoolSubmitted && workSubmitted) {
    return (
      <div className="App">
        <h2>All done!</h2>
        <button onClick={unsubmit}>Go Back</button>
      </div>
    )
  } else {
    return (
      <div className="App">
        <h1>CV Builder</h1>
        {renderInfoForm()}
        {renderSchoolForm()}
        {renderWorkForm()}
      </div>
    );
  }
}

export default App;
