import React from 'react'
import FluidImage from 'components/FluidImage'

const Location = ({fallbackImage}) => {
  return (
    <div
      className={`
        margin-vertical:columns-0-1/2
        @mq-max-palm--margin-vertical:800
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
        // ensure wider image than phone viewport as it crops heavily when portrait
        sizes={`
          (max-width: 1000px) 1000px
        `}
      />
    </div>
  )
}

export default Location
