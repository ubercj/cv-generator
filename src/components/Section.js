import React from 'react'

function Section (props) {
  const { words } = props;

  return (
    <div>
      I'm a section
      Here's my prop: {words}
    </div>
  )
}

export default Section;