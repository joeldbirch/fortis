import React from 'react'
import FluidImage from 'components/FluidImage'
import { cols, mq } from 'utilities/helpers'

// import { cols, mq } from 'utilities/helpers'

// // const smallerSizes = `
// //   (max-width: ${mq.toPalm}) ${cols(12)}vw,
// //   (min-width: ${mq.desk}) ${cols(3)}vw,
// //   (min-width: ${mq.palm}) ${cols(4)}vw,
// //   850px
// // `

const styles = {
  root: `
    padding-horizontal:columns-0-1/2
    @mq-desk--padding-vertical:columns-0-1/2
    padding-top:800
    position:relative
    width:100
  `,
}

const LargeTextThreeImages = ({
  start: {
    benText,
    benLargerImage,
  },
  middle: {
    benSmallerImage,
    benNote,
  },
  end: {
    benOtherSmallerImage,
    benOtherNote,
  },
}) => {

  return !benText ? `` : (
    <section className={styles.root}>
      <div
        className={`
          display:flex
          flex-direction:column-reverse
          @mq-palm--flex-direction:row
          justify-content:space-between
          @mq-desk--padding-horizontal:columns-1
        `}
      >

        <div className={`
          @mq-palm--width:50
          @mq-palm--padding-right:columns-1
          ${!benLargerImage ? `` : `@mq-lap--margin-top:columns-1`}
        `}>
          <div
            dangerouslySetInnerHTML={{__html: benText}}
            className={`
              s-editable
              rhythm-fix-before
              rhythm-fix-after
            `}
          />
          {
            !benSmallerImage
            ? ``
            : <figure className={`
                margin-top:800
                @mq-palm--margin-top:columns-1
                @mq-palm--display:flex
                @mq-desk--margin-right:-columns-2
                @mq-desk--margin-left:columns-1
                @mq-palm--margin-right:-columns-1
                align-items:center
              `}>
                <div className={`
                  box-sizing:content-box
                  @mq-desk--max-width:100
                  @mq-palm--width:columns-3
                  @mq-desk--width:columns-2
                  @mq-lap--padding-right:400
                `}>
                  <FluidImage
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
                {
                  !benNote
                  ? ``
                  : <figcaption
                      className={`
                        @mq-palm--padding-left:800
                        @mq-palm--margin-right:400
                        flex-basis:40
                      `}
                    >
                      <span
                        className={`
                          handwritten
                          display:block
                          @mq-max-palm--text-align:center
                          padding-vertical:columns-0-1/2
                          rhythm-fix-after
                        `}
                      >{benNote}</span>
                    </figcaption>
                }
              </figure>
          }

        </div>

        <div className={`
          @mq-palm--width:50
          @mq-desk--padding-left:columns-1
          @mq-max-palm--margin-bottom:800
        `}>
          { benLargerImage
            ? <FluidImage
                image={benLargerImage}
                className={`
                  margin-bottom:800
                  @mq-tiny--margin-bottom:0
                `}
                sizes={`
                  (max-width: ${mq.toPalm}) ${cols(12)}vw,
                  (min-width: ${mq.desk}) ${cols(4)}vw,
                  (min-width: ${mq.palm}) ${cols(6)}vw
                `}
              />
            : ``
          }
        </div>
      </div>

      {
        !benOtherSmallerImage
        ? ``
        : <figure className={`
            @mq-palm--margin-right:columns-2
            @mq-desk--margin-right:columns-3
            @mq-palm--margin-top:columns-1
            @mq-palm--display:flex
            @mq-palm--flex-direction:row-reverse
            align-items:center
          `}>
          { benOtherSmallerImage
            ? <FluidImage
                className={`
                  @mq-palm--max-width:columns-5
                  @mq-desk--max-width:columns-4
                  width:100
                `}
                image={benOtherSmallerImage}
                sizes={`
                  (max-width: ${mq.toPalm}) ${cols(12)}vw,
                  (min-width: ${mq.desk}) ${cols(4)}vw,
                  (min-width: ${mq.palm}) ${cols(5)}vw
                `}
              />
            : ``
          }
          {
            !benOtherNote
            ? ``
            : <figcaption
                className={`
                  @mq-tiny--padding-horizontal:800
                  @mq-desk--padding-horizontal:columns-1
                  flex-grow:1
                `}
              >
                <span
                  className={`
                    handwritten
                    display:block
                    text-align:center
                    padding-vertical:columns-0-1/2
                  `}
                >{benOtherNote}</span>
              </figcaption>
          }

        </figure>
      }

    </section>
  )
}

export default LargeTextThreeImages
