import React from 'react'
import MultiFormatImage from 'components/MultiFormatImage'
import {subhead} from 'styles/helpers'
import {cols, mq} from 'utilities/helpers'
import {moduleRoot} from 'styles/helpers'

const styles = {
  root: moduleRoot,
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
    @mq-widepalm--align-self:flex-end
    @mq-widepalm--max-width:columns-4
    width:100
  `,
  startColumnEndRow: `
    @mq-desk--justify-self:flex-end
    @mq-palm--margin-top:columns-0-1/2
    @mq-palm--max-width:small-column
  `,
  endColumnStartRow: `
    @mq-desk--padding-right:columns-0-1/2
    @mq-lap--align-items:flex-end
    @mq-palm--max-width:100
    @mq-palm--max-width:caption
    @mq-palm--padding-horizontal:400
    @mq-widepalm--margin-right:-columns-2
    @mq-widepalm--margin-top:columns-1
    @mq-widepalm--pos-right:0
    @mq-widepalm--pos-top:400
    @mq-widepalm--position:absolute
    @mq-widepalm--width:columns-2-1/2
    display:flex
    flex-direction:column
  `,
  endColumnEndRow: `
    height:100
    width:100
  `,
}

const TextRightTwoImages = ({
  bobImages: {larger, smaller},
  bobText,
  bobHeading,
  bobNote,
}) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapColumns}>
        <div className={styles.startColumn}>
          <div className={styles.startColumnStartRow}>
            <MultiFormatImage
              image={smaller}
              sizes={`
                (max-width: ${mq.toPalm}) ${cols(12)}vw,
                (min-width: ${mq.desk}) ${cols(3)}vw,
                (min-width: ${mq.palm}) ${cols(4)}vw
              `}
            />
          </div>

          <div className={styles.startColumnEndRow}>
            <h2
              className={`
              ${subhead}
              margin-bottom:400
              rhythm-fix-after
            `}
            >
              {bobHeading}
            </h2>
            <p
              className={`
              margin-bottom:800
              rhythm-fix-after
            `}
            >
              {bobText}
            </p>
          </div>
        </div>

        <div className={styles.endColumn}>
          <div
            className={` ${styles.endColumnStartRow} `}
            style={{'--max-width': `calc(90vw - 17.5em)`}}
          >
            <span
              className={`
                @mq-palm--align-self:flex-end
                @mq-palm--padding-top:0
                @mq-palm--text-align:right
                @mq-palm--width:small-caption
                @mq-widepalm--text-align:center
                display:block
                handwritten
                margin-vertical:auto
                padding-vertical:columns-0-1/2
                @mq-max-palm--padding-bottom:columns-1
                rhythm-fix-after
                rhythm-fix-before
                text-align:center
              `}
            >
              {bobNote}
            </span>
          </div>

          <div className={styles.endColumnEndRow}>
            <MultiFormatImage
              image={larger}
              className={`
                @mq-palm--height:100
              `}
              sizes={`
                (max-width: ${mq.toPalm}) ${cols(12)}vw,
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
