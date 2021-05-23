import Section from './Section'

const WorkSection = (props) => {
  const { otherName, labelNames } = props;

  return (
    <Section otherName={otherName} labelNames={labelNames}/>
  )
}

export default WorkSection;