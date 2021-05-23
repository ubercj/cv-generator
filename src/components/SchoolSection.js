import Section from './Section'

const SchoolSection =  (props) => {
  const { otherName, labelNames } = props;

  return (
    <Section otherName={otherName} labelNames={labelNames}/>
  )
}

export default SchoolSection;