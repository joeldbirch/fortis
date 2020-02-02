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
        @mq-palm--max-width:small-column

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
        @mq-max-palm--margin-top:400
        @mq-lap--padding-horizontal:columns-1
        @mq-desk--padding-horizontal:columns-2
      `}>
        <MultiFormatImage
          image={diagram}
          className={`
            width:100
            height:auto
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
