import React from 'react'
import FluidImage from 'components/FluidImage'

const FullWidthContent = ({className, freeText, image, ...props}) => {
  return (
    <div
      className={`
        ${className}
      `}
    >
      <div
        dangerouslySetInnerHTML={{__html: freeText}}
        className={`
          s-editable
          rhythm-fix-before
          rhythm-fix-after
        `}
      />

      <FluidImage
        image={image}
      />
    </div>
  )
}

export default FullWidthContent
