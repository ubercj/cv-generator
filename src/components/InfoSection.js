import Section from './Section'

const InfoSection = (props) => {
  const { otherName, labelNames } = props;

  return (
    <Section otherName={otherName} labelNames={labelNames}/>
  )
}

export default InfoSection;