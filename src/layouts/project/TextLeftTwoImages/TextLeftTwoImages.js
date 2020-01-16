import React from 'react'
import FluidImage from '../../../components/FluidImage'
import { subhead } from '../../../styles/helpers'

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
        width:100
        max-width:container
        margin-horizontal:auto
        margin-vertical:columns-0-1/2
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
      <figure className={`
        display:flex
        flex-direction:column
        position:relative
      `}>
        <FluidImage
          image={billLargerImage}
          className={`
          `}
        />
        <figcaption
          className={`
          `}
        >
          {billNote}
        </figcaption>
      </figure>

      <div
        className={`
          display:flex
          flex-direction:column
        `}
      >
        <FluidImage
          image={billSmallerImage}
          className={`
          `}
        />

        <div
          className={`
            s-editable
          `}
        >
          <h2 className={`${subhead}`}>{billHeading}</h2>
          <p>{billText}</p>
        </div>
      </div>
    </section>
  )
}

export default TextLeftTwoImages
