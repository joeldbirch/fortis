import React from 'react'
import MultiFormatImage from 'components/MultiFormatImage'
import { cols, mq } from 'utilities/helpers'
import { moduleRoot } from 'styles/helpers'

const styles = {
  root: moduleRoot,
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
    @mq-palm--margin-bottom:columns-0-1/2
    @mq-palm--width:columns-3
  `,
  startColumnEndRow: `
    @mq-palm--max-width:small-column
  `,
  endColumnStartRow: `
    @mq-lap--align-self:flex-start
    @mq-palm--max-width:var
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
  billNote,
}) => {
  return (
    <section className={`${styles.root}`}>
      <div className={styles.wrapColumns}>
        <div className={styles.startColumn}>
          <div className={styles.startColumnStartRow}>
            <MultiFormatImage
              className={`
                @mq-palm--margin-right:-400
                @mq-max-palm--margin-top:800
              `}
              image={smaller}
              sizes={`
                (max-width: ${mq.toPalm}) ${cols(12)}vw,
                (min-width: ${mq.desk}) calc(${cols(2)}vw + 1em),
                (min-width: ${mq.palm}) calc(${cols(3)}vw + 1em)
              `}
            />
          </div>

          <div className={styles.startColumnEndRow}>
            <div
              className={`
                s-editable
              `}
              dangerouslySetInnerHTML={{__html: billText}}
            />
          </div>
        </div>


        <figure className={styles.endColumn}>
          <figcaption
            className={`${styles.endColumnStartRow}`}
            style={{'--max-width' : `calc(90vw - 12em)`}}
          >
            <span
              className={`
                @mq-max-palm--padding-bottom:columns-1
                @mq-palm--max-width:small-column
                @mq-palm--text-align:left
                display:block
                handwritten
                margin-vertical:auto
                padding-vertical:columns-0-1/2
                rhythm-fix-after
                text-align:center
              `}
            >{billNote}</span>
          </figcaption>

          <div className={styles.endColumnEndRow}>
            <MultiFormatImage
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
