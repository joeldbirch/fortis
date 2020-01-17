import React from 'react'
import FluidImage from '../../../components/FluidImage'
import { subhead, handwritten } from '../../../styles/helpers'

const styles = {
  root: `
    padding-horizontal:columns-0-1/2
    padding-vertical:800
    @mq-palm--padding-vertical:columns-0-1/2
    width:100
    max-width:container
    margin-horizontal:auto
    position:relative
    grid-guide
  `,
  wrapColumns: `
    🎁wrap-columns
    width:100
    flex-direction:row-reverse
    @mq-palm--display:flex
    @mq-desk--padding-horizontal:columns-1
    justify-content:space-between
  `,
  startColumn: `
    🏁start-column
    display:flex
    flex-direction:column-reverse
    @mq-palm--flex-direction:column
    @mq-palm--width:columns-4
    @mq-widepalm--width:columns-6
    @mq-desk--width:columns-5
    @mq-widepalm--justify-content:space-between
  `,
  endColumn: `
    🎬end-column
    display:flex
    flex-direction:column
    position:relative
    @mq-lap--align-items:flex-end
    @mq-lap--justify-content:space-between
    @mq-palm--padding-right:columns-1
    @mq-palm--width:columns-8
    @mq-widepalm--width:columns-6
    @mq-desk--width:columns-5
  `,
  startColumnStartRow: `
    max-width:small-column
    width:100
    @mq-tiny--margin-bottom:columns-0-1/2
    max-width:small-column
    @mq-widepalm--max-width:columns-4
    @mq-widepalm--align-self:flex-end
    @mq-desk--width:columns-3
  `,
  startColumnEndRow: `
    max-width:small-column
    @mq-desk--justify-self:flex-end
  `,
  endColumnStartRow: `
    @mq-tiny--position:absolute
    @mq-palm--position:static
    @mq-widepalm--position:absolute
    @mq-widepalm--pos-right:0
    @mq-widepalm--margin-right:-columns-2
    @mq-widepalm--margin-top:columns-1
    @mq-widepalm--pos-top:400
    @mq-widepalm--width:columns-2-1/2
    @mq-max-palm--pos-bottom:100
    @mq-max-palm--pos-right:0
    @mq-max-palm--width:columns-8
    display:flex
    flex-direction:column
    @mq-lap--align-items:flex-end
    padding-horizontal:400
  `,
  endColumnEndRow: `
    width:100
    height:100
  `,
}


const TextRightTwoImages = ({
  bobLargerImage,
  bobSmallerImage,
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
              image={bobSmallerImage}
            />
          </div>

          <div className={styles.startColumnEndRow}>
            <h2 className={`${subhead}`}>
              {bobHeading}
            </h2>
            <p className={`
              margin-bottom:800
              rhythm-fix-after
            `}>{bobText}</p>
          </div>
        </div>


        <div className={styles.endColumn}>
          <div
            className={`
              ${styles.endColumnStartRow}
              @mq-tiny--max-width:var
              @mq-palm--max-width:100
            `}
            style={{'--max-width' : 'calc(90vw - 19em)'}}
          >
            <span
              className={`
                ${handwritten}
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
              `}
            >{bobNote}</span>
          </div>

          <div className={styles.endColumnEndRow}>
            <FluidImage
              image={bobLargerImage}
              className={`
                height:100
              `}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextRightTwoImages
