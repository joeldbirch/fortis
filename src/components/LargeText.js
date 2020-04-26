import React from 'react'
import { cleanWpContent } from 'utilities/helpers'

const defaultMaxWidth = {'--max-width': `21em`}

export default ({className=``, styles=defaultMaxWidth, children=null, ...props}) => {
  return !children ? `` : (
    <div
      dangerouslySetInnerHTML={{__html: cleanWpContent(children)}}
      className={`
        ${className}
        @mq-palm--max-width:var
        @mq-palm--font-size:500
        rhythm-fix-after
        rhythm-fix-before
        s-editable
      `}
      style={styles}
      {...props}
    />
  )
}
