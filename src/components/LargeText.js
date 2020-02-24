import React from 'react'
import { cleanWpContent } from 'utilities/helpers'

export default ({className=``, children=null, ...props}) => {
  return !children ? `` : (
    <div
      dangerouslySetInnerHTML={{__html: cleanWpContent(children)}}
      className={`
        ${className}
        font-size:500
        @mq-palm--max-width:var
        s-editable
        rhythm-fix-before
        rhythm-fix-after
      `}
      style={{'--max-width': '21em'}}
      {...props}
    />
  )
}
