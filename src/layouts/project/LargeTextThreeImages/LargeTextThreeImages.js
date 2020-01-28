import React from 'react'
import FluidImage from 'components/FluidImage'
import { handwritten } from 'styles/helpers'

// import { cols, mq } from 'utilities/helpers'

// // const smallerSizes = `
// //   (max-width: ${mq.maxPalm}) ${cols(12)}vw,
// //   (min-width: ${mq.desk}) ${cols(3)}vw,
// //   (min-width: ${mq.palm}) ${cols(4)}vw,
// //   850px
// // `

const styles = {
  root: `
    padding-horizontal:columns-0-1/2
    padding-vertical:800
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
          @mq-tiny--flex-direction:row
          justify-content:space-between
          @mq-desk--padding-horizontal:columns-1
        `}
      >

        <div className={`
          @mq-tiny--width:50
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
                @mq-tiny--margin-top:columns-1
                @mq-tiny--display:flex
                @mq-tiny--margin-right:-columns-6
                @mq-desk--margin-right:-columns-2
                @mq-desk--margin-left:columns-1
                @mq-palm--margin-right:-columns-1
                align-items:center
              `}>
                <div className={`
                  box-sizing:content-box
                  @mq-desk--max-width:100
                  @mq-tiny--width:columns-5
                  @mq-palm--width:columns-3
                  @mq-desk--width:columns-2
                  @mq-lap--padding-right:400
                  width:caption
                `}>
                  <FluidImage
                    className={` @mq-lap--margin-right:-400`}
                    image={benSmallerImage}
                  />
                </div>
                {
                  !benNote
                  ? ``
                  : <figcaption
                      className={`
                        @mq-palm--max-width:var
                        @mq-tiny--padding-left:800
                        flex-basis:40
                      `}
                      style={{'--max-width' : 'calc(90vw - 12em)'}}
                    >
                      <span
                        className={`
                          ${handwritten}
                          display:block
                          text-align:left
                          padding-vertical:columns-0-1/2
                          rhythm-fix-after
                          max-width:caption
                        `}
                      >{benNote}</span>
                    </figcaption>
                }
              </figure>
        }

        </div>

        <div className={`
          @mq-tiny--width:columns-5
          @mq-palm--width:50
          @mq-desk--padding-left:columns-1
        `}>
          { benLargerImage
            ? <FluidImage
                image={benLargerImage}
                className={`
                  margin-bottom:800
                  @mq-tiny--margin-bottom:0
                  @mq-tiny--max-width:100
                  max-width:small-column

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
          margin-top:800
          @mq-palm--margin-right:columns-2
          @mq-desk--margin-right:columns-3
          @mq-tiny--margin-top:columns-1
          @mq-tiny--display:flex
          @mq-tiny--flex-direction:row-reverse
          align-items:center
        `}>
          { benOtherSmallerImage
            ? <FluidImage
                className={`
                  max-width:small-column
                  width:100
                  @mq-tiny--max-width:columns-5
                  @mq-desk--max-width:columns-4
                `}
                image={benOtherSmallerImage}
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
                    ${handwritten}
                    display:block
                    text-align:left
                    @mq-tiny--text-align:center
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
