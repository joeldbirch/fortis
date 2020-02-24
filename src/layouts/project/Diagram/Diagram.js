import React from 'react'
import MultiFormatImage from 'components/MultiFormatImage'
import { subhead } from 'styles/helpers'
import { cols, mq } from 'utilities/helpers'

// const styles = {
//   root: `

//   `,
// }

const Diagram = ({diagram, text, heading}) => {
  return (
    <section
      className={`
        @mq-palm--padding-top:columns-0-1/2
        margin-horizontal:auto
        max-width:container
        padding-horizontal:columns-0-1/2
        padding-top:800
        position:relative
        width:100
      `}
    >
      <div className={`
        @mq-desk--margin-left:columns-7
        @mq-palm--margin-left:columns-6
        @mq-palm--max-width:small-column
        @mq-palm--position:absolute
        @mq-palm--width:columns-6

      `}>
        <h2 className={`
          ${subhead}
          margin-bottom:400
          rhythm-fix-after
        `}>
          {heading}
        </h2>
        <p>{text}</p>
      </div>
      <div className={`
        @mq-desk--padding-horizontal:columns-2
        @mq-lap--padding-horizontal:columns-1
        @mq-max-palm--margin-top:400
      `}>
        <MultiFormatImage
          image={diagram}
          className={`
            height:auto
            width:100
          `}
          sizes={`
            (min-width: ${mq.lap}) ${cols(10)}vw,
            (min-width: ${mq.desk}) ${cols(8)}vw,
            ${cols(12)}vw
          `}
        />
      </div>
    </section>
  )
}

export default Diagram
