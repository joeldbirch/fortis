import React from 'react'
import FluidImage from 'components/FluidImage'
import FluidVideo from 'components/FluidVideo'
import { cols, mq } from 'utilities/helpers'


const styles = {
  root: `
    @mq-desk--padding-horizontal:columns-1-1/2
    @mq-desk--padding-vertical:columns-0-1/2
    margin-horizontal:auto
    max-width:container
    padding-horizontal:columns-0-1/2
    padding-vertical:800
    position:relative
    width:100
  `,
}

const SimpleLandscape = ({
  simpleGroup: {
    media: {
      simpleNote: note,
      simpleVideo: video,
      simpleImage: image,
    },
    textual: {
      simpleText: html,
    },
  },
}) => {
  return (
    <section className={styles.root}>
      <div
        className={`
          display:grid
          grid-gap:400
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
            @mq-palm--grid-gap:600
            margin-vertical:auto
          `}
        >
          {
            video ? <FluidVideo id={video}/>
            : <FluidImage
                className={``}
                image={image}
                sizes={`
                  (max-width: ${mq.toPalm}) ${cols(12)}vw,
                  (min-width: ${mq.desk}) ${cols(6)}vw,
                  (min-width: ${mq.palm}) ${cols(4)}vw
                `}
              />
          }

          {
            note && (
              <figcaption
                className={`
                  handwritten
                `}
              >
                {note}
              </figcaption>
            )
          }

        </figure>
      </div>
    </section>
  )
}

export default SimpleLandscape