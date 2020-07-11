import React from 'react'
import FluidImage from '../FluidImage'
import {subhead} from 'styles/helpers'
import {cols, mq} from 'utilities/helpers'

const FaqSection = ({data, className = ``}) => {
  return (
    <div
      className={`
        ${className}
      `}
    >
      <h2
        className={`
          font-size:500
          font-weight:400
          border-bottom-style:solid
          border-bottom-width:100
          border-bottom-color:neutral-700
          padding-bottom:200
        `}
      >
        {data.faqSectionTitle}
      </h2>

      {data.qandas.map((qanda, index) => (
        <div
          key={index}
          className={`
            @mq-widepalm--display:grid
            grid-template-columns:2
            padding-bottom:600
            @mq-widepalm--padding-bottom:columns-0-1/2
          `}
          style={{
            '--grid-template-columns-var-1': `6fr 6fr`,
            '--grid-template-columns-var-2': `5fr 6fr`,
            '--grid-template-columns-var-3': `4fr 5fr`,
          }}
        >
          <div
            className={`
              grid-column:2
              @mq-palm--grid-row:1
              margin-top:columns-0-1/2
            `}
          >
            <FluidImage
              image={qanda.media.image}
              sizes={`
                (max-width: ${mq.toPalm}) ${cols(12)}vw,
                (min-width: ${mq.desk}) ${cols(4)}vw,
                (min-width: ${mq.widepalm}) ${cols(6)}vw,
                (min-width: ${mq.palm}) ${cols(5.5)}vw,
                510px
              `}
            />
          </div>

          <div
            className={`
              @mq-palm--padding-right:columns-1
              @mq-desk--padding-right:columns-0-1/2
              padding-top:600
              @mq-palm--padding-top:columns-0-1/2
            `}
          >
            <h2
              className={`
                @mq-palm--margin-bottom:columns-0-1/2
                margin-bottom:400
                rhythm-fix-before
              `}
            >
              <span
                className={`
                  ${subhead}
                  display:block
                `}
              >
                {qanda.textual.question}
              </span>
            </h2>

            <div
              dangerouslySetInnerHTML={{__html: qanda.textual.answer}}
              className={`
                s-editable
              `}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FaqSection
