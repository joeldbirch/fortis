import React from 'react'

export default ({className=``, children=null, ...props}) => {
  return !children ? `` : (
    <div
      dangerouslySetInnerHTML={{__html: children}}
      className={`
        ${className}
        font-size:500
        @mq-bigdesk--font-size:600
        @mq-palm--max-width:var
        s-editable
        rhythm-fix-before
        rhythm-fix-after
      `}
      style={{'--max-width': '20em'}}
      {...props}
    />
  )
}
