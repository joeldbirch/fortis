import React from 'react'
import MultiFormatImage from 'components/MultiFormatImage'
import FluidVideo from 'components/FluidVideo'
import {cols, mq} from 'utilities/helpers'
import {moduleRoot} from 'styles/helpers'

const SimpleLandscape = ({
  simpleGroup: {
    media: {simpleNote: note, simpleVideo: video, simpleImage: image},
    textual: {simpleText: html},
  },
}) => {
  return (
    <section className={moduleRoot}>
      <PureSimpleLandscape {...{html, video, image, note}} />
    </section>
  )
}

export default SimpleLandscape

export const PureSimpleLandscape = ({html, video, image, note}) => {
  return (
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
        '--grid-template-columns-var-1': `5fr 6fr`,
        '--grid-template-columns-var-2': `4fr 7fr`,
        '--grid-template-columns-var-3': `3fr 6fr`,
      }}
    >
      <div
        className={`
          s-editable
          @mq-palm--max-width:small-column
        `}
        dangerouslySetInnerHTML={{__html: html}}
      />

      <figure
        className={`
          display:grid
          grid-gap:400
          @mq-max-palm--grid-row:1
          @mq-palm--grid-gap:800
          margin-vertical:auto
        `}
      >
        {video ? (
          <FluidVideo id={video} />
        ) : (
          <MultiFormatImage
            className={``}
            image={image}
            sizes={`
            (max-width: ${mq.toPalm}) ${cols(12)}vw,
            (min-width: ${mq.desk}) ${cols(6)}vw,
            (min-width: ${mq.palm}) ${cols(4)}vw
          `}
          />
        )}

        {note && (
          <figcaption
            className={`
              handwritten
            `}
          >
            {note}
          </figcaption>
        )}
      </figure>
    </div>
  )
}
