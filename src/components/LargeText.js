import React from 'react'
import { cleanWpContent } from 'utilities/helpers'

export default ({className=``, children=null, ...props}) => {
  return !children ? `` : (
    <div
      dangerouslySetInnerHTML={{__html: cleanWpContent(children)}}
      className={`
        ${className}
        @mq-palm--max-width:var
        font-size:500
        rhythm-fix-after
        rhythm-fix-before
        s-editable
      `}
      style={{'--max-width': '21em'}}
      {...props}
    />
  )
}
