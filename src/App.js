import React, { useState } from 'react'
import './styles/App.css'
import './styles/Section.css'
import Input from './components/Input'
import SchoolSection from './components/SchoolSection'
import WorkSection from './components/WorkSection'

const App = () => {
  // Info section
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // School section
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [gpa, setGpa] = useState('');

  const [schoolArray, setSchoolArray] = useState([]);
  const [showSchoolForm, setShowSchoolForm] = useState(false);

  // Work section
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [reason, setReason] = useState('');

  const [workArray, setWorkArray] = useState([]);
  const [showWorkForm, setShowWorkForm] = useState(false);

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

  const submitInfo = (e) => {
    e.preventDefault();
    setInfoSubmitted(true);
  }

  const submitSchool = (e) => {
    e.preventDefault();
    setSchoolSubmitted(true);
    setShowSchoolForm(false);

    const schoolEntry = {
      school: school,
      degree: degree,
      gpa: gpa
    }

    setSchoolArray([...schoolArray, schoolEntry]);
    
    setSchool('');
    setDegree('');
    setGpa('');
  }

  const removeSchool = (school) => {
    let index = schoolArray.indexOf(school);

    setSchoolArray((prevArr) => {
      return prevArr.filter((item, idx) => idx !== index)
    })
  }

  const submitWork = (e) => {
    e.preventDefault();
    setWorkSubmitted(true);
    setShowWorkForm(false);

    const workEntry = {
      company: company,
      title: title,
      reason: reason
    }

    setWorkArray([...workArray, workEntry]);
    
    setCompany('');
    setTitle('');
    setReason('');
  }

  const removeWork = (work) => {
    let index = workArray.indexOf(work);

    setWorkArray((prevArr) => {
      return prevArr.filter((item, idx) => idx !== index)
    })
  }

  /*===================
  Conditional Rendering
  ====================*/

  const infoForm = (
    <section className="Section">
      <h3>I'm a section! Fill out this form:</h3>
      <form className="Form" onSubmit={submitInfo}>
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
      <form className="Form" onSubmit={submitSchool}>
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
    schoolArray.map((school) => {
      return (
      <div key={school.school} id={school.school}>
        <SchoolSection school={school.school} degree={school.degree} gpa={school.gpa}/>
        <button onClick={() => removeSchool(school)}>Delete (for now)</button>
      </div>
      )
    })
  )

  const renderSchoolForm = () => {
    if (showSchoolForm) {
      return (
        <section className="Section">
          {schoolSection}
          {schoolForm}
          <button onClick={() => setShowSchoolForm(true)}>Add a school</button>
        </section>
      );
    } else {
      return (
        <section className="Section">
          {schoolSection}
          <button onClick={() => setShowSchoolForm(true)}>Add a school</button>
        </section>
      )
    }
  }

  const workForm = (
    <section className="Section">
      <h3>I'm a section! Fill out this form:</h3>
      <form className="Form" onSubmit={submitWork}>
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
    workArray.map((work) => {
      return (
      <div key={work.title} id={work.title}>
        <WorkSection company={work.company} title={work.title} reason={work.reason}/>
        <button onClick={() => removeWork(work)}>Delete (for now)</button>
      </div>
      )
    })
  )

  const renderWorkForm = () => {
    if (showWorkForm) {
      return (
        <section className="Section">
          {workSection}
          {workForm}
          <button onClick={() => setShowWorkForm(true)}>Add work experience</button>
        </section>
      );
    } else {
      return (
        <section className="Section">
          {workSection}
          <button onClick={() => setShowWorkForm(true)}>Add work experience</button>
        </section>
      )
    }
  }

  return (
    <div className="App">
      <h1>CV Builder</h1>
      {renderInfoForm()}
      {renderSchoolForm()}
      {renderWorkForm()}
    </div>
  );
}

export default App;
