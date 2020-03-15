import React from 'react'
import MultiFormatImage from 'components/MultiFormatImage'
import FluidImage from 'components/FluidImage'
import HeadlightsLayout from 'components/HeadlightsLayout'
import ArrowDrawnUpLeft from 'components/ArrowDrawnUpLeft'
import { moduleRoot } from 'styles/helpers'
import { cols, mq } from 'utilities/helpers'

const PortraitDiagram = ({
  start: {
    note,
    portraitImage,
  },
  end: {
    horizontalImage,
    textContent,
  },
}) => {
  return (
    <section
      className={`
        ${moduleRoot}
      `}
    >
      <HeadlightsLayout
        flipHorizontal={false}
        className={`
        `}
        //render prop slots for content
        slotA={(
          <div
            className={`
              position:relative
              display:grid
              grid-gap:400
            `}
          >
            <MultiFormatImage
              image={portraitImage}
              className={`
                height:auto
              `}
              sizes={`
                (max-width: ${mq.toPalm}) ${cols(12)}vw,
                (min-width: ${mq.desk}) ${cols(4)}vw,
                (min-width: ${mq.palm}) ${cols(6)}vw
              `}
            />

            {
              note && (
                <p
                  className={`
                    text-align:center
                    @mq-desk--text-align:left
                    @mq-desk--position:absolute
                    @mq-desk--pos-top:0
                    @mq-desk--pos-left:100
                    @mq-desk--width:columns-2
                    @mq-desk--margin-left:200
                    @mq-desk--margin-top:400
                    @mq-desk--padding-left:600
                    @mq-desk--padding-right:800
                    @mq-desk--padding-top:800
                    handwritten
                    position:relative
                    rhythm-fix-after
                  `}
                >
                  <ArrowDrawnUpLeft
                    className={`
                      @mq-desk--transform:var-2
                      @mq-desk--pos-left:0
                      position:absolute
                      pos-top:0
                      transform:var-1
                    `}
                    style={{
                      '--rotate-var-1': `90deg`,
                      '--translate-x-var-1': `-80%`,
                      '--translate-y-var-1': `-150%`,
                      '--translate-x-var-2': `10%`,
                      '--translate-y-var-2': `0`,
                      '--scale-y-var-1': `0.75`,
                      '--scale-x-var-1': `-0.75`,
                      '--rotate-var-2': `-70deg`,
                      'transform-origin': `center`
                    }}
                  />
                  {note}
                </p>
              )
            }
          </div>
        )}

        slotB={(
          <div
            className={`
              display:grid
              grid-gap:800
            `}
          >
            {
              horizontalImage && (
                <FluidImage
                  image={horizontalImage}
                  className={`
                  `}
                  sizes={`
                    (max-width: ${mq.toPalm}) ${cols(12)}vw,
                    (min-width: ${mq.desk}) ${cols(4)}vw,
                    (min-width: ${mq.palm}) ${cols(6)}vw
                  `}
                />
              )
            }

            <div
              className={`
                s-editable
                @mq-palm--max-width:small-column
                rhythm-fix-before
                rhythm-fix-after
              `}
              dangerouslySetInnerHTML={{__html: textContent}}
            />
          </div>
        )}
      />
    </section>
  )
}

export default PortraitDiagram
