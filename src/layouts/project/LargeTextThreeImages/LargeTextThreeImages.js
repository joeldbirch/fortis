import React from 'react'
import FluidImage from '../../../components/FluidImage'
import { handwritten } from '../../../styles/helpers'

const styles = {
  root: `
    @mq-palm--padding-vertical:columns-0-1/2
    margin-horizontal:auto
    max-width:container
    padding-horizontal:columns-0-1/2
    padding-vertical:800
    position:relative
    width:100
    grid-guide
  `,
  wrapColumns: `
    🎁wrap-columns
    @mq-desk--padding-horizontal:columns-1
    @mq-palm--display:flex
    justify-content:space-between
    width:100
  `,
  startColumn: `
    🏁start-column
    @mq-desk--align-self:flex-start
    @mq-palm--flex-direction:column
    display:flex
    flex-direction:column-reverse
  `,
  endColumn: `
    🎬end-column
    @mq-lap--align-items:flex-end
    @mq-lap--justify-content:space-between
    display:flex
    flex-direction:column
    position:relative
  `,
  startColumnEndRow: `
    max-width:small-column
  `,

  endColumnEndRow: `
    @mq-desk--width:columns-7
    @mq-palm--padding-left:columns-1
    @mq-palm--width:columns-8
    align-self:flex-end
    flex-basis:60
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
  return (
    <section className={styles.root}>
      <div
        className={`
          @mq-palm--display:flex
          @mq-desk--padding-horizontal:columns-1
        `}
      >

        <div className={`
          @mq-palm--width:50
          @mq-palm--padding-right:columns-1
          @mq-lap--margin-top:columns-1
        `}>
          <div
            dangerouslySetInnerHTML={{__html: benText}}
            className={`
              s-editable
            `}
          />
          <figure className={`
            margin-top:columns-1
            @mq-tiny--display:flex
            @mq-desk--margin-right:-columns-2
            @mq-desk--margin-left:columns-1
            @mq-palm--margin-right:-columns-1
            align-items:center
          `}>
            <div className={`
              @mq-desk--max-width:100
              @mq-palm--width:columns-3
              @mq-desk--width:columns-2
              @mq-tiny--margin-bottom:columns-0-1/2
              width:caption
            `}>
              <FluidImage
                className={` @mq-lap--margin-right:-400`}
                image={benSmallerImage}
              />
            </div>
            <figcaption
              className={`
                @mq-tiny--max-width:var
                @mq-tiny--padding-left:columns-0-1/2
                flex-basis:40
              `}
              style={{'--max-width' : 'calc(90vw - 12em)'}}
            >
              <span
                className={`
                  ${handwritten}
                  display:block
                  @mq-tiny--margin-top:-1000
                  text-align:left
                  padding-vertical:columns-0-1/2
                  rhythm-fix-after
                  max-width:caption
                `}
              >{benNote}</span>
            </figcaption>
          </figure>
        </div>

        <div className={`
          @mq-palm--width:50
          @mq-desk--padding-left:columns-1
        `}>
          <FluidImage
            image={benLargerImage}
            className={`
              @mq-max-palm--margin-top:columns-0-1/2
              @mq-max-palm--max-width:small-column

            `}
          />
        </div>
      </div>
    </section>
  )
}

export default LargeTextThreeImages
