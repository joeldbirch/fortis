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
        grid-guide
      `}
    >
      <div
        className={`
          display:grid
          grid-gap:800
          @mq-palm--grid-gap:columns-1
          @mq-palm--grid-template-columns:var-1
          @mq-lap--grid-template-columns:var-2
          @mq-desk--grid-template-columns:var-3
        `}
        style={{
          '--grid-template-columns-var-1': `6fr 5fr`,
          '--grid-template-columns-var-2': `7fr 4fr`,
          '--grid-template-columns-var-3': `6fr 3fr`,
        }}
      >

        <div
          className={`
            display:grid
            grid-gap:800
            @mq-palm--grid-gap:columns-0-1/2
          `}
        >
          <FluidImage
            image={mainImage}
            className={`
            `}
            sizes={`
              (max-width: ${mq.toPalm}) ${cols(12)}vw,
              (min-width: ${mq.desk}) ${cols(4)}vw,
              (min-width: ${mq.palm}) ${cols(6)}vw
            `}
          />

          <div
            className={`
              s-editable
              @mq-max-palm--grid-row:1
            `}
            dangerouslySetInnerHTML={{__html: quote}}
          />
        </div>

        <div
          className={`
            display:flex
            flex-direction:column
            justify-content:space-between
          `}
        >
          <div
            className={`
              s-editable
              rhythm-fix-after
            `}
            dangerouslySetInnerHTML={{__html: textContent}}
          />

          <FluidImage
            className={`
              @mq-desk--width:columns-2
              @mq-palm--margin-right:-400
              @mq-palm--margin-top:columns-1
              @mq-palm--width:columns-3
              margin-top:800
            `}
            image={secondaryImage}
            sizes={`
              (max-width: ${mq.toPalm}) ${cols(12)}vw,
              (min-width: ${mq.desk}) calc(${cols(2)}vw + 1em),
              (min-width: ${mq.palm}) calc(${cols(3)}vw + 1em)
            `}
          />
        </div>

      </div>


    </section>
  )
}

export default InFocus
