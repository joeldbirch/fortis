import React from 'react'
import MultiFormatImage from 'components/MultiFormatImage'
import {cols, mq} from 'utilities/helpers'
import {moduleRoot} from 'styles/helpers'

// import { cols, mq } from 'utilities/helpers'

// // const smallerSizes = `
// //   (max-width: ${mq.toPalm}) ${cols(12)}vw,
// //   (min-width: ${mq.desk}) ${cols(3)}vw,
// //   (min-width: ${mq.palm}) ${cols(4)}vw,
// //   850px
// // `

const styles = {
  root: moduleRoot,
}

const LargeTextThreeImages = ({
  start: {benText, benLargerImage},
  middle: {benSmallerImage, benNote},
  end: {benOtherSmallerImage, benOtherNote},
}) => {
  return !benText ? (
    ``
  ) : (
    <section className={styles.root}>
      <div
        className={`
          @mq-palm--flex-direction:row
          display:flex
          flex-direction:column-reverse
          justify-content:space-between
        `}
      >
        <div
          className={`
          @mq-palm--padding-right:columns-1
          @mq-palm--width:50
          ${benLargerImage ? `@mq-lap--margin-top:columns-1` : ``}
        `}
        >
          <div
            dangerouslySetInnerHTML={{__html: benText}}
            className={`
              rhythm-fix-after
              rhythm-fix-before
              s-editable
            `}
          />
          {benSmallerImage && (
            <figure
              className={`
                @mq-desk--margin-left:columns-1
                @mq-desk--margin-right:-columns-2
                @mq-palm--display:flex
                @mq-palm--margin-right:-columns-1
                @mq-palm--margin-top:columns-1
                align-items:center
                margin-top:800
              `}
            >
              <div
                className={`
                  @mq-desk--max-width:100
                  @mq-desk--width:columns-2
                  @mq-lap--padding-right:400
                  @mq-palm--width:columns-3
                  box-sizing:content-box
                `}
              >
                <MultiFormatImage
                  className={` @mq-lap--margin-right:-400`}
                  image={benSmallerImage}
                  sizes={`
                      (max-width: ${mq.toPalm}) ${cols(12)}vw,
                      (min-width: ${mq.desk}) calc(${cols(2)}vw + 1em),
                      (min-width: ${mq.lap}) calc(${cols(3)}vw + 1em),
                      (min-width: ${mq.palm}) ${cols(3)}vw
                    `}
                />
              </div>
              {benNote && (
                <figcaption
                  className={`
                        @mq-palm--margin-right:400
                        @mq-palm--padding-left:800
                        flex-basis:40
                      `}
                >
                  <span
                    className={`
                          @mq-max-palm--text-align:center
                          display:block
                          handwritten
                          padding-vertical:columns-0-1/2
                          @mq-max-palm--padding-bottom:columns-1
                          rhythm-fix-after
                        `}
                  >
                    {benNote}
                  </span>
                </figcaption>
              )}
            </figure>
          )}
        </div>

        <div
          className={`
          @mq-desk--padding-left:columns-1
          @mq-max-palm--margin-bottom:800
          @mq-palm--width:50
        `}
        >
          {benLargerImage && (
            <MultiFormatImage
              image={benLargerImage}
              className={`
                  @mq-tiny--margin-bottom:0
                  margin-bottom:800
                `}
              sizes={`
                  (max-width: ${mq.toPalm}) ${cols(12)}vw,
                  (min-width: ${mq.desk}) ${cols(4)}vw,
                  (min-width: ${mq.palm}) ${cols(6)}vw
                `}
            />
          )}
        </div>
      </div>

      {benOtherSmallerImage && (
        <figure
          className={`
            @mq-desk--margin-right:columns-2
            @mq-desk--margin-left:-columns-1
            @mq-palm--display:flex
            @mq-palm--flex-direction:row-reverse
            @mq-palm--margin-right:columns-2
            @mq-palm--margin-top:columns-1
            align-items:center
          `}
        >
          {benOtherSmallerImage ? (
            <MultiFormatImage
              className={`
                  @mq-desk--max-width:columns-4
                  @mq-palm--max-width:columns-5
                  width:100
                `}
              image={benOtherSmallerImage}
              sizes={`
                  (max-width: ${mq.toPalm}) ${cols(12)}vw,
                  (min-width: ${mq.desk}) ${cols(4)}vw,
                  (min-width: ${mq.palm}) ${cols(5)}vw
                `}
            />
          ) : (
            ``
          )}

          {benOtherNote && (
            <figcaption
              className={`
                  @mq-desk--padding-horizontal:columns-1
                  @mq-tiny--padding-horizontal:800
                  flex-grow:1
                `}
            >
              <span
                className={`
                    display:block
                    handwritten
                    padding-vertical:columns-0-1/2
                    @mq-max-palm--padding-bottom:columns-1
                    text-align:center
                  `}
              >
                {benOtherNote}
              </span>
            </figcaption>
          )}
        </figure>
      )}
    </section>
  )
}

export default LargeTextThreeImages
