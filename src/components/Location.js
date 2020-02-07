import React from 'react'
import FluidImage from 'components/FluidImage'

const Location = ({fallbackImage}) => {
  return (
    <div
      className={`
        margin-vertical:columns-0-1/2
        height:100vh-fixed
        width:100vw
      `}
    >
      <FluidImage
        image={fallbackImage}
        className={`
          width:100
          height:100
          display:block
        `}
      />
    </div>
  )
}

export default Location
