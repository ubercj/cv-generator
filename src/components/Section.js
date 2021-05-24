import React from 'react'
import '../styles/Section.css'
import '../styles/Form.css'

const Section = (props) => {
  const { onSubmit } = props;

  return (
    <section className="Section">
      <h3>I'm a section! Fill out this form:</h3>
      <form className="Form" onSubmit={onSubmit}>
        {props.children}
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Section;