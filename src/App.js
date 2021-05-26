import React, { useState } from 'react'
import './styles/App.css'
import './styles/Section.css'
import Input from './components/Input'
import SchoolSection from './components/SchoolSection'
import SchoolForm from './components/SchoolForm'
import WorkSection from './components/WorkSection'
import WorkForm from './components/WorkForm'
import uniqid from 'uniqid'

const App = () => {
  /*===================
  State
  ====================*/

  // Info section
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [infoSubmitted, setInfoSubmitted] = useState(false);

  // School section
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [gpa, setGpa] = useState('');

  const [schoolArray, setSchoolArray] = useState([]);
  const [currentSchool, setCurrentSchool] = useState('')
  const emptySchool = {
    school: '',
    degree: '',
    gpa: '',
    id: uniqid()
  }

  // Work section
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [reason, setReason] = useState('');

  const [workArray, setWorkArray] = useState([]);
  const [currentWork, setCurrentWork] = useState('')
  const emptyWork = {
    company: '',
    title: '',
    reason: '',
    id: uniqid()
  }

  /*===================
  Functions
  ====================*/

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

  // Education Logic

  const addSchool = () => {
    setCurrentSchool(emptySchool);
    setSchool('');
    setDegree('');
    setGpa('');
    setSchoolArray([...schoolArray, emptySchool]);
  }

  const submitSchool = (e) => {
    e.preventDefault();

    const schoolEntry = {
      school: school,
      degree: degree,
      gpa: gpa,
      id: currentSchool.id
    }

    const idx = schoolArray.indexOf(currentSchool);
    const newArray = [...schoolArray];
    newArray[idx] = schoolEntry;
    setSchoolArray(newArray);
    
    setCurrentSchool('');
    setSchool('');
    setDegree('');
    setGpa('');
  }

  const editSchool = (school) => {
    setCurrentSchool(school);
    setSchool(school.school);
    setDegree(school.degree);
    setGpa(school.gpa);
  }

  const removeSchool = (school) => {
    let index = schoolArray.indexOf(school);
    setSchoolArray((prevArr) => {
      return prevArr.filter((item, idx) => idx !== index)
    })
  }

  // Work Logic

  const addWork = () => {
    setCurrentWork(emptyWork);
    setCompany('');
    setTitle('');
    setReason('');
    setWorkArray([...workArray, emptyWork]);
  }

  const submitWork = (e) => {
    e.preventDefault();

    const workEntry = {
      company: company,
      title: title,
      reason: reason,
      id: currentWork.id
    }

    const idx = workArray.indexOf(currentWork);
    const newArray = [...workArray];
    newArray[idx] = workEntry;
    setWorkArray(newArray);
    
    setCurrentWork('');
    setCompany('');
    setTitle('');
    setReason('');
  }

  const editWork = (work) => {
    setCurrentWork(work);
    setCompany(work.company);
    setTitle(work.title);
    setReason(work.reason);
  }

  const removeWork = (work) => {
    let index = workArray.indexOf(work);
    setWorkArray((prevArr) => {
      return prevArr.filter((item, idx) => idx !== index)
    })
  }

  /*===================
  Rendering Components
  ====================*/

  const infoForm = (
    <section className="Section">
      <h2>Contact Information</h2>
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
      <h2>Contact Information</h2>
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

  const schoolSection = (
    schoolArray.map((item) => {
      if (item === currentSchool) {
        return (
          // There can only be one form at a time, but I set a key here to avoid the annoying error in the console
          <SchoolForm key={uniqid()}
          handleSubmit={submitSchool} handleChange={handleChange}
          school={school} degree={degree} gpa={gpa}
          />
        )
      } else {
      return (
        <div key={item.id} id={item.id}>
          <SchoolSection school={item.school} degree={item.degree} gpa={item.gpa}/>
          <button onClick={() => editSchool(item)}>Edit</button>
          <button onClick={() => removeSchool(item)}>Delete</button>
        </div>
      )
      }
    })
  )

  const renderSchoolForm = () => {
    return (
      <section className="Section">
        <h2>Education</h2>
        {schoolSection}
        <button onClick={addSchool}>Add Education</button>
      </section>
    )
  }

  const workSection = (
    workArray.map((item) => {
      if (item === currentWork) {
        return (
          // There can only be one form at a time, but I set a key here to avoid the annoying error in the console
          <WorkForm key={uniqid()}
          handleSubmit={submitWork} handleChange={handleChange}
          company={company} title={title} reason={reason}
          />
        )
      } else {
        return (
        <div key={item.title} id={item.title}>
          <WorkSection company={item.company} title={item.title} reason={item.reason}/>
          <button onClick={() => editWork(item)}>Edit</button>
          <button onClick={() => removeWork(item)}>Delete</button>
        </div>
        )
      }
    })
  )

  const renderWorkForm = () => {
    return (
      <section className="Section">
        <h2>Work Experience</h2>
        {workSection}
        <button onClick={addWork}>Add Work Experience</button>
      </section>
    )
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
