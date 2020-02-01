import React from 'react'
import FluidImage from 'components/FluidImage'
import { subhead } from 'styles/helpers'
import { cols, mq } from 'utilities/helpers'

const styles = {
  root: `
    padding-horizontal:columns-0-1/2
    @mq-desk--padding-horizontal:columns-1-1/2
    @mq-desk--padding-vertical:columns-0-1/2
    padding-vertical:800
    position:relative
    width:100
  `,
  wrapColumns: `
    🎁wrap-columns
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
  startColumnStartRow: `
    @mq-desk--max-width:100
    @mq-desk--width:columns-2
    @mq-palm--width:columns-3
    @mq-tiny--margin-bottom:columns-0-1/2
    width:caption
  `,
  startColumnEndRow: `
    max-width:small-column
  `,
  endColumnStartRow: `
    @mq-lap--align-self:flex-start
    @mq-max-palm--pos-bottom:100
    @mq-max-palm--pos-right:0
    @mq-max-palm--width:columns-8
    @mq-palm--position:static
    @mq-tiny--max-width:var
    @mq-tiny--position:absolute
    display:flex
    flex-basis:40
    flex-direction:column
    padding-horizontal:columns-0-1/2
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


const TextLeftTwoImages = ({
  billImages: {
    larger,
    smaller,
  },
  billText,
  billHeading,
  billNote
}) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapColumns}>
        <div className={styles.startColumn}>
          <div className={styles.startColumnStartRow}>
            <FluidImage
              className={` @mq-palm--margin-right:-400`}
              image={smaller}
              sizes={`
                (max-width: ${mq.toPalm}) 12em,
                (min-width: ${mq.desk}) calc(${cols(2)}vw + 1em),
                (min-width: ${mq.palm}) calc(${cols(3)}vw + 1em)
              `}
            />
          </div>

          <div className={styles.startColumnEndRow}>
            <h2 className={`
              ${subhead}
              margin-bottom:400
              rhythm-fix-after
            `}>
              {billHeading}
            </h2>
            <p className={`
              margin-bottom:800
              rhythm-fix-after
            `}>{billText}</p>
          </div>
        </div>


        <figure className={styles.endColumn}>
          <figcaption
            className={`${styles.endColumnStartRow}`}
            style={{'--max-width' : 'calc(90vw - 12em)'}}
          >
            <span
              className={`
                handwritten
                display:block
                margin-vertical:auto
                text-align:center
                @mq-palm--text-align:left
                padding-vertical:columns-0-1/2
                rhythm-fix-after
              `}
            >{billNote}</span>
          </figcaption>

          <div className={styles.endColumnEndRow}>
            <FluidImage
              image={larger}
              className={`
                height:100
              `}
              sizes={`
                (max-width: ${mq.toPalm}) ${cols(12)}vw,
                (min-width: ${mq.desk}) ${cols(6)}vw,
                (min-width: ${mq.palm}) ${cols(7)}vw
              `}
            />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default TextLeftTwoImages
