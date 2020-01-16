import React from 'react'
import MultiFormatImage from '../../../components/MultiFormatImage'
import { subhead } from '../../../styles/helpers'

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
        max-width:container
        margin-horizontal:auto
        margin-bottom:columns-0-1/2
        margin-top:columns-0-1/2
        position:relative
        grid-guide
      `}
      style={{
        '--guides-max-width': '100rem',
        '--guide-color': 'hsla(350, 100%, 48%, 0.1)',
        '--position': 'absolute'
      }}
    >
      <div className={`
        @mq-widepalm--position:absolute
        @mq-palm--margin-left:columns-6
        @mq-desk--margin-left:columns-7
        @mq-palm--width:columns-6
        @mq-palm--max-width:small-column

      `}>
        <h2 class={`${subhead}`}>
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
            max-width:100
          `}
        />
      </div>
    </section>
  )
}

export default Diagram
