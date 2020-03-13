import React from 'react'
import FluidImage from 'components/FluidImage'
import { cols, mq } from 'utilities/helpers'
import { moduleRoot } from 'styles/helpers'

const InFocus = ({
  group: {
    start: {
      quote,
      mainImage,
    },
    end: {
      textContent,
      secondaryImage,
    },
  },
}) => {
  return (
    <section
      className={`
        ${moduleRoot}
      `}
    >
      <div
        className={`
          @mq-palm--display:grid
          @mq-palm--grid-template-columns:var-1
          @mq-desk--grid-template-columns:var-2
          padding-top:800
          @mq-palm--padding-top:columns-0-1/2
        `}
        style={{
          '--grid-template-columns-var-1': `6fr 1fr 5fr`,
          '--grid-template-columns-var-2': `4fr 2fr 4fr`,
        }}
      >
        <div
          className={`
            s-editable
            grid-column:3
            @mq-palm--max-width:small-column
          `}
          dangerouslySetInnerHTML={{__html: quote}}
        />

        <FluidImage
          image={mainImage}
          className={`
            @mq-max-palm--margin-top:columns-1
            @mq-palm--height:100
            grid-column:1
            grid-row:1
          `}
          sizes={`
            (max-width: ${mq.toPalm}) ${cols(12)}vw,
            (min-width: ${mq.desk}) ${cols(4)}vw,
            (min-width: ${mq.palm}) ${cols(6)}vw
          `}
        />
      </div>
    </section>
  )
}

export default InFocus
