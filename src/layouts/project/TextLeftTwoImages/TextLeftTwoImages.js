import React from 'react'
import FluidImage from '../../../components/FluidImage'
import { subhead, handwritten } from '../../../styles/helpers'

// const styles = {
//   root: `

//   `,
// }

const TextLeftTwoImages = ({
  billLargerImage,
  billSmallerImage,
  billText,
  billHeading,
  billNote
}) => {
  return (
    <section
      className={`
        padding-horizontal:columns-0-1/2
        padding-vertical:800
        @mq-palm--padding-vertical:columns-0-1/2
        width:100
        max-width:container
        margin-horizontal:auto
        position:relative
        grid-guide
        join-start
      `}
      style={{
        '--guides-max-width': '100rem',
        '--guide-color': 'hsla(350, 100%, 48%, 0.1)',
        '--position': 'absolute'
      }}
    >
      <div
        className={`
          🎁wrap-columns
          width:100
          @mq-palm--display:flex
          @mq-desk--padding-horizontal:columns-1
          justify-content:space-between
        `}
      >

        <div
          className={`
            🏁start-column
            display:flex
            flex-direction:column-reverse
            @mq-lap--flex-direction:column
            @mq-desk--align-self:flex-start
          `}
        >
          <div
            className={`
              width:columns-10
              @mq-lap--margin-bottom:columns-0-1/2
              max-width:caption
              @mq-palm--padding-right:800
              @mq-bigdesk--padding-right:1000
              @mq-bigdesk--max-width:small-column
            `}
          >
            <FluidImage
              image={billSmallerImage}
              className={`

              `}
            />
          </div>

          <div
            className={`
              max-width:small-column
              @mq-palm--padding-right:600
              @mq-lap--padding-right:0
            `}
          >
            <h2 className={`${subhead}`}>
              {billHeading}
            </h2>
            <p className={`
              margin-bottom:800
              rhythm-fix-after
            `}>{billText}</p>
          </div>
        </div>

        <figure className={`
          🎬end-column
          display:flex
          flex-direction:column
          flex-basis:70
          @mq-lap--align-items:flex-end
          @mq-lap--justify-content:space-between
        `}>
          <figcaption
            className={`
              display:flex
              flex-direction:column
              flex-basis:40
              @mq-lap--align-self:flex-start
              padding-horizontal:columns-0-1/2
            `}
          >
            <span
              className={`
                ${handwritten}
                display:block
                margin-vertical:auto
                text-align:center
                @mq-desk--text-align:left
                padding-vertical:800
                @mq-widepalm--padding-vertical:columns-0-1/2
              `}
            >{billNote}</span>
          </figcaption>
          <div
            className={`
              @mq-lap--padding-left:columns-1
              @mq-desk--max-width:columns-7
              width:100
              flex-basis:60
            `}
          >
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
