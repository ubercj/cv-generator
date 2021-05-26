import '../styles/Section.css'
import '../styles/Card.css'

const InfoSection = (props) => {
  const { name, email, phone } = props;

  return (
    <div className="Card">
      <p><span>Name:</span> {name}</p>
      <p><span>Email:</span> {email}</p>
      <p><span>Phone:</span> {phone}</p>
    </div>
  )
}

export default InfoSection;