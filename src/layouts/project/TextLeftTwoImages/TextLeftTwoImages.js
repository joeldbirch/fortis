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
    @mq-palm--display:flex
    @mq-desk--padding-horizontal:columns-1
    justify-content:space-between
  `,
  startColumn: `
    🏁start-column
    display:flex
    flex-direction:column-reverse
    @mq-palm--flex-direction:column
    @mq-desk--align-self:flex-start
  `,
  endColumn: `
    🎬end-column
    display:flex
    flex-direction:column
    position:relative
    @mq-lap--align-items:flex-end
    @mq-lap--justify-content:space-between
  `,
  startColumnStartRow: `
    width:columns-10
    @mq-tiny--margin-bottom:columns-0-1/2
    max-width:caption
    @mq-palm--padding-right:800
    @mq-bigdesk--padding-right:1000
    @mq-bigdesk--max-width:small-column
  `,
  startColumnEndRow: `
    max-width:small-column
  `,
  endColumnStartRow: `
    @mq-tiny--position:absolute
    @mq-palm--position:static
    @mq-max-palm--pos-bottom:100
    @mq-max-palm--pos-right:0
    @mq-max-palm--width:columns-8
    display:flex
    flex-direction:column
    flex-basis:40
    @mq-lap--align-self:flex-start
    padding-horizontal:columns-0-1/2
  `,
  endColumnEndRow: `
    align-self:flex-end
    @mq-palm--padding-left:columns-1
    @mq-palm--width:columns-8
    @mq-desk--width:columns-7
    width:100
    flex-basis:60
  `,
}


const TextLeftTwoImages = ({
  billLargerImage,
  billSmallerImage,
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
              image={billSmallerImage}
            />
          </div>

          <div className={styles.startColumnEndRow}>
            <h2 className={`${subhead}`}>
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
            className={`${styles.endColumnStartRow} @mq-tiny--max-width:var`}
            style={{'--max-width' : 'calc(90vw - 12em)'}}
          >
            <span
              className={`
                ${handwritten}
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
              image={billLargerImage}
              className={`
                height:100
              `}
            />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default TextLeftTwoImages
