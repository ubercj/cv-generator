import React, { useState } from 'react'
import uniqid from 'uniqid'

import Navbar from './components/Navbar'
import InfoSection from './components/InfoSection'
import InfoForm from './components/InfoForm'
import SchoolSection from './components/SchoolSection'
import SchoolForm from './components/SchoolForm'
import WorkSection from './components/WorkSection'
import WorkForm from './components/WorkForm'

import './styles/App.css'
import './styles/Form.css'
import './styles/Section.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

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
  const [gradDate, setGradDate] = useState('');

  const [schoolArray, setSchoolArray] = useState([]);
  const [currentSchool, setCurrentSchool] = useState('')
  const emptySchool = {
    school: '',
    degree: '',
    gpa: '',
    gradDate: '',
    id: uniqid()
  }

  // Work section
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [workArray, setWorkArray] = useState([]);
  const [currentWork, setCurrentWork] = useState('')
  const emptyWork = {
    company: '',
    title: '',
    details: '',
    startDate: '',
    endDate: '',
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
      case 'gradDate':
        setGradDate(newValue);
        break;
      case 'company':
        setCompany(newValue);
        break;
      case 'title':
        setTitle(newValue);
        break;
      case 'details':
        setDetails(newValue);
        break;
      case 'startDate':
        setStartDate(newValue);
        break;
      case 'endDate':
        setEndDate(newValue);
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
    setGradDate('');
    setSchoolArray([...schoolArray, emptySchool]);
  }

  const submitSchool = (e) => {
    e.preventDefault();

    const schoolEntry = {
      school: school,
      degree: degree,
      gpa: gpa,
      gradDate: gradDate,
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
    setGradDate('');
  }

  const editSchool = (school) => {
    setCurrentSchool(school);
    setSchool(school.school);
    setDegree(school.degree);
    setGpa(school.gpa);
    setGradDate(school.gradDate);
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
    setDetails('');
    setStartDate('');
    setEndDate('');
    setWorkArray([...workArray, emptyWork]);
  }

  const submitWork = (e) => {
    e.preventDefault();

    const workEntry = {
      company: company,
      title: title,
      details: details,
      startDate: startDate,
      endDate: endDate,
      id: currentWork.id
    }

    const idx = workArray.indexOf(currentWork);
    const newArray = [...workArray];
    newArray[idx] = workEntry;
    setWorkArray(newArray);
    
    setCurrentWork('');
    setCompany('');
    setTitle('');
    setDetails('');
    setStartDate('');
    setEndDate('');
  }

  const editWork = (work) => {
    setCurrentWork(work);
    setCompany(work.company);
    setTitle(work.title);
    setDetails(work.details);
    setStartDate(work.startDate);
    setEndDate(work.endDate);
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
  const renderInfoForm = () => {
    if (infoSubmitted) {
      return ( 
        <section className="Section">
          <header>
            <h2>Contact Information</h2>
            <FontAwesomeIcon icon={faPencilAlt} className='icon'
            onClick={() => setInfoSubmitted(false)} />
          </header>
          <InfoSection
            name={name} email={email} phone={phone}
          />
        </section>
      );
    } else {
      return (
        <section className="Section">
          <h2>Contact Information</h2>
          <InfoForm
            handleSubmit={submitInfo} handleChange={handleChange}
            name={name} email={email} phone={phone}
          />
        </section>
      );
    }
  }

  const schoolSection = (
    schoolArray.map((item) => {
      if (item === currentSchool) {
        return (
          // There can only be one form at a time, but I set a key here to avoid the annoying error in the console
          <SchoolForm key={'schoolForm'}
          handleSubmit={submitSchool} handleChange={handleChange}
          school={school} degree={degree} gpa={gpa} gradDate={gradDate}
          />
        )
      } else {
      return (
        <div key={item.id} id={item.id}>
          <SchoolSection school={item.school} degree={item.degree} gpa={item.gpa} gradDate={item.gradDate}/>
          <FontAwesomeIcon icon={faPencilAlt} className='icon'
          onClick={() => editSchool(item)} />
          <FontAwesomeIcon icon={faTrash} className='icon'
          onClick={() => removeSchool(item)} />
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
        <button onClick={addSchool}>
          Add Education
          <FontAwesomeIcon icon={faPlusCircle} className='icon' />
        </button>
      </section>
    )
  }

  const workSection = (
    workArray.map((item) => {
      if (item === currentWork) {
        return (
          // There can only be one form at a time, but I set a key here to avoid the annoying error in the console
          <WorkForm key={'workForm'}
          handleSubmit={submitWork} handleChange={handleChange}
          company={company} title={title} details={details}
          startDate={startDate} endDate={endDate}
          />
        )
      } else {
        return (
        <div key={item.title} id={item.title}>
          <WorkSection
            company={item.company} title={item.title}
            details={item.details} startDate={item.startDate}
            endDate={item.endDate}
          />
          <FontAwesomeIcon icon={faPencilAlt} className='icon'
          onClick={() => editWork(item)} />
          <FontAwesomeIcon icon={faTrash} className='icon'
          onClick={() => removeWork(item)} />
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
        <button onClick={addWork}>
          Add Experience
          <FontAwesomeIcon icon={faPlusCircle} className='icon' />  
        </button>
      </section>
    )
  }

  return (
    <div className="App">
      <Navbar />
      {renderInfoForm()}
      {renderSchoolForm()}
      {renderWorkForm()}
    </div>
  );
}

export default App;
