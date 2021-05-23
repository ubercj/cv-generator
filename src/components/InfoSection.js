import Section from './Section'

const InfoSection = (props) => {
  const { values, update } = props;

  const nameField = {
    label: 'Name: ',
    type: 'text'
  }

  const emailField = {
    label: 'Email: ',
    type: 'email'
  }

  const phoneField = {
    label: 'Phone: ',
    type: 'tel'
  }

  return (
    <Section
    fields={[nameField, emailField, phoneField]}
    values={values}
    update={update}
    />
  )
}

export default InfoSection;