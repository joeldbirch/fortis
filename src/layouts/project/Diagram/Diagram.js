import React from 'react'
import MultiFormatImage from 'components/MultiFormatImage'
import { subhead } from 'styles/helpers'

// const styles = {
//   root: `

//   `,
// }

const Diagram = ({diagram, text, heading}) => {
  return (
    <section
      className={`
        padding-horizontal:columns-0-1/2
        width:100
        padding-top:800
        @mq-palm--padding-top:columns-0-1/2
        position:relative
      `}
    >
      <div className={`
        @mq-palm--position:absolute
        @mq-palm--margin-left:columns-6
        @mq-desk--margin-left:columns-7
        @mq-palm--width:columns-6
        max-width:small-column

      `}>
        <h2 className={`${subhead}`}>
          {heading}
        </h2>
        <p>{text}</p>
      </div>
      <div className={`
        @mq-max-palm--margin-top:400
        @mq-desk--padding-horizontal:columns-1
      `}>
        <MultiFormatImage
          image={diagram}
          className={`
            width:100
            height:auto
          `}
        />
      </div>
    </section>
  )
}

export default Diagram
