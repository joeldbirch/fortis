import React from 'react'
import MultiFormatImage from '../../../components/MultiFormatImage'

// const styles = {
//   root: `

//   `,
// }

const Diagram = ({diagram, text, heading}) => {
  return (
    <section
      className={`
        position:relative
        min-height:100vh
        width:100vw
      `}
    >
      <MultiFormatImage
        image={diagram}
        className={`
          height:100vh
        `}
      />
      {heading}
      {text}
    </section>
  )
}

export default Diagram
