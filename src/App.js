import React, { useState } from 'react'
import './styles/App.css'
import InfoSection from './components/InfoSection'
import SchoolSection from './components/SchoolSection'
import WorkSection from './components/WorkSection'

const App = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [school, setSchool] = useState({
    school: '',
    degree: '',
    GPA: ''
  })

  const [work, setWork] = useState({
    company: '',
    title: '',
    reason: ''
  })

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <InfoSection
      values={info}
      update={setInfo}
      />
      <SchoolSection
      values={school}
      update={setSchool}
      />
      <WorkSection
      values={work}
      update={setWork}
      />
    </div>
  );
}

export default App;
