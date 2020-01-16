import React from 'react'
import FluidImage from '../../../components/FluidImage'
import { subhead } from '../../../styles/helpers'

// const styles = {
//   root: `

//   `,
// }

const TextRightTwoImages = ({
  bobLargerImage,
  bobSmallerImage,
  bobText,
  bobHeading,
  bobNote
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
      <div className={`
        display:flex
        flex-direction:column
      `}>
        <figure className={`
          display:flex
          position:relative
        `}>
          <figcaption
            className={`
            `}
          >
            {bobNote}
          </figcaption>
          <FluidImage
            image={bobSmallerImage}
            className={`
              width:columns-3
            `}
          />
        </figure>

        <div
          className={`
            s-editable
          `}
        >
          <h2 className={`${subhead}`}>{bobHeading}</h2>
          <p>{bobText}</p>
        </div>
      </div>

      <div
        className={`
          display:flex
          flex-direction:column
        `}
      >
        <FluidImage
          image={bobLargerImage}
          className={`
          `}
        />
      </div>
    </section>
  )
}

export default TextRightTwoImages
