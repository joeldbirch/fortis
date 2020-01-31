import React from 'react'
import FluidImage from 'components/FluidImage'

const FullWidthContent = ({className=``, freeText, image, ...props}) => {
  return (
    <div
      className={`
        ${className}
        padding-horizontal:columns-0-1/2
        @mq-desk--padding-horizontal:columns-1-1/2
        padding-top:site-top
        scroll-snap-align:start
      `}
    >
      <div
        dangerouslySetInnerHTML={{__html: freeText}}
        className={`
          s-editable
          rhythm-fix-before
          rhythm-fix-after
          padding-right:columns-1
          padding-bottom:400
          @mq-palm--padding-bottom:columns-0-1/2
        `}
      />

      <FluidImage
        image={image}
        // TODO: sizes
        className={`
          margin-vertical:400
          @mq-palm--margin-vertical:columns-0-1/2
        `}
      />
    </div>
  )
}

export default FullWidthContent
