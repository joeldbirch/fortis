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
    flex-direction:row-reverse
    justify-content:space-between
    width:100
  `,
  startColumn: `
    🏁start-column
    @mq-desk--width:columns-5
    @mq-palm--flex-direction:column
    @mq-palm--width:columns-4
    @mq-widepalm--justify-content:space-between
    @mq-widepalm--width:columns-6
    display:flex
    flex-direction:column-reverse
  `,
  endColumn: `
    🎬end-column
    @mq-desk--width:columns-5
    @mq-lap--justify-content:space-between
    @mq-palm--align-items:flex-end
    @mq-palm--padding-right:columns-1
    @mq-palm--width:columns-8
    @mq-widepalm--width:columns-6
    display:flex
    flex-direction:column
    position:relative
  `,
  startColumnStartRow: `
    @mq-desk--width:columns-3
    @mq-tiny--margin-bottom:columns-0-1/2
    @mq-widepalm--align-self:flex-end
    @mq-widepalm--max-width:columns-4
    max-width:small-column
    width:100
  `,
  startColumnEndRow: `
    @mq-desk--justify-self:flex-end
    max-width:small-column
  `,
  endColumnStartRow: `
    @mq-lap--align-items:flex-end
    @mq-max-palm--pos-bottom:100
    @mq-max-palm--pos-right:0
    @mq-palm--max-width:100
    @mq-palm--max-width:caption
    @mq-palm--position:static
    @mq-tiny--max-width:var
    @mq-tiny--position:absolute
    @mq-widepalm--margin-right:-columns-2
    @mq-widepalm--margin-top:columns-1
    @mq-widepalm--pos-right:0
    @mq-widepalm--pos-top:400
    @mq-widepalm--position:absolute
    @mq-widepalm--width:columns-2-1/2
    @mq-desk--padding-right:columns-0-1/2
    display:flex
    flex-direction:column
    max-width:small-column
    padding-horizontal:400
  `,
  endColumnEndRow: `
    height:100
    width:100
  `,
}


const TextRightTwoImages = ({
  bobImages: {
    larger,
    smaller,
  },
  bobText,
  bobHeading,
  bobNote
}) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapColumns}>
        <div className={styles.startColumn}>
          <div className={styles.startColumnStartRow}>
            <FluidImage
              image={smaller}
              sizes={`
                (max-width: ${mq.toPalm}) 17.5em,
                (min-width: ${mq.desk}) ${cols(3)}vw,
                (min-width: ${mq.palm}) ${cols(4)}vw
              `}
            />
          </div>

          <div className={styles.startColumnEndRow}>
            <h2 className={`
              ${subhead}
              margin-bottom:400
              rhythm-fix-after
            `}>
              {bobHeading}
            </h2>
            <p className={`
              margin-bottom:800
              rhythm-fix-after
            `}>{bobText}</p>
          </div>
        </div>


        <div className={styles.endColumn}>
          <div className={` ${styles.endColumnStartRow} `}
            style={{'--max-width' : 'calc(90vw - 17.5em)'}}
          >
            <span
              className={`
                handwritten
                display:block
                margin-vertical:auto
                text-align:center
                @mq-palm--text-align:right
                @mq-widepalm--text-align:center
                @mq-palm--align-self:flex-end
                padding-vertical:columns-0-1/2
                @mq-palm--padding-top:0
                rhythm-fix-after
                rhythm-fix-before
                @mq-palm--width:small-caption
              `}
            >{bobNote}</span>
          </div>

          <div className={styles.endColumnEndRow}>
            <FluidImage
              image={larger}
              className={`
                height:100
                @mq-max-palm--max-width:small-column
              `}
              sizes={`
                (max-width: ${mq.toPalm}) 17.5em,
                (min-width: ${mq.desk}) ${cols(4)}vw,
                (min-width: ${mq.widepalm}) ${cols(5)}vw,
                (min-width: ${mq.palm}) ${cols(7)}vw
              `}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextRightTwoImages
