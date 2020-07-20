import React from 'react'
import MultiFormatImage from '../MultiFormatImage'
import FluidVideo from '../FluidVideo'
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
            @mq-lap--display:grid
            grid-template-columns:2
            padding-bottom:600
            @mq-lap--padding-bottom:columns-0-1/2
          `}
          style={{
            '--grid-template-columns-var-1': `6fr 6fr`,
            '--grid-template-columns-var-2': `5fr 6fr`,
            '--grid-template-columns-var-3': `4fr 5fr`,
          }}
        >
          <div
            className={`
              @mq-palm--padding-right:columns-1
              @mq-desk--padding-right:columns-0-1/2
              padding-top:800
            `}
          >
            <h2
              className={`
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

          <div
            className={`
              @mq-lap--column-row:2
              @mq-lap--margin-vertical:auto
              @mq-lap--padding-top:800
              padding-top:600
            `}
          >
            {qanda.media.simpleVideo ? (
              <FluidVideo id={qanda.media.simpleVideo} />
            ) : (
              <MultiFormatImage
                className={`
                `}
                image={qanda.media.image}
                sizes={`
                    (min-width: ${mq.desk}) ${cols(4)}vw,
                    (min-width: ${mq.lap}) ${cols(6)}vw,
                    (min-width: ${mq.palm}) ${cols(5.5)}vw,
                    ${cols(12)}vw
                  `}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FaqSection
