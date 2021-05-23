import Section from './Section'

const WorkSection = (props) => {
  const { values, update } = props;

  const companyField = {
    label: 'Company: ',
    type: 'text'
  }

  const titleField = {
    label: 'Title: ',
    type: 'text'
  }

  const reasonField = {
    label: 'Reason for leaving: ',
    type: 'text'
  }

  return (
    <Section
    fields={[companyField, titleField, reasonField]}
    values={values}
    update={update}
    />
  )
}

export default WorkSection;