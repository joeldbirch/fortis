import React from 'react'
import FluidImage from 'components/FluidImage'

const Location = ({fallbackImage}) => {
  return (
    <div
      className={`
        margin-vertical:columns-0-1/2
      `}
    >
      <FluidImage
        image={fallbackImage}
        className={`
          width:100
          height:auto
          display:block
        `}
      />
    </div>
  )
}

export default Location
