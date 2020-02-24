import React from 'react'
import FluidImage from 'components/FluidImage'
import { cols, mq } from 'utilities/helpers'

const FullWidthContent = ({className=``, freeText, image, ...props}) => {
  return (
    <div
      className={`
        ${className}
        @mq-desk--padding-horizontal:columns-1-1/2
        js-contrast
        margin-horizontal:auto
        max-width:container
        padding-horizontal:columns-0-1/2
        padding-top:site-top
        scroll-snap-align:start
      `}
    >
      <div
        dangerouslySetInnerHTML={{__html: freeText}}
        className={`
          padding-right:columns-1
          rhythm-fix-after
          rhythm-fix-before
          s-editable
        `}
      />

      <FluidImage
        image={image}
        className={`
          @mq-palm--margin-vertical:columns-0-1/2
          margin-vertical:400
        `}
        sizes={`
          (min-width: ${mq.desk}) ${cols(10)}vw,
          (min-width: 1px) ${cols(12)}vw
        `}
      />
    </div>
  )
}

export default FullWidthContent
