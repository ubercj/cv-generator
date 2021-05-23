import Section from './Section'

const SchoolSection =  (props) => {
  const { values, update } = props;

  const schoolField = {
    label: 'School: ',
    type: 'text'
  }

  const degreeField = {
    label: 'Degree: ',
    type: 'text'
  }

  const gpaField = {
    label: 'GPA: ',
    type: 'number',
    min: '0',
    max: '4.0',
    step: '.1'
  }

  return (
    <Section
    fields={[schoolField, degreeField, gpaField]}
    values={values}
    update={update}
    />
  )
}

export default SchoolSection;