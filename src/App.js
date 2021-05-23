import './styles/App.css'
import InfoSection from './components/InfoSection'
import SchoolSection from './components/SchoolSection'
import WorkSection from './components/WorkSection'

const App = () => {

  const infoLabels = ['Name', 'Email', 'Phone'];
  const schoolLabels = ['School', 'Degree', 'GPA'];
  const workLabels = ['Company', 'Title', 'Reason for leaving'];

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <InfoSection
      otherName='for general information'
      labelNames={infoLabels}
      />
      <SchoolSection
      otherName='for school information'
      labelNames={schoolLabels}
      />
      <WorkSection
      otherName='for work information'
      labelNames={workLabels}
      />
    </div>
  );
}

export default App;
