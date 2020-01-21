import React from 'react'

export default ({children}) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: children}}
      className={`
        font-size:500
        @mq-bigdesk--font-size:600
        max-width:var
        s-editable
        rhythm-fix-before
        rhythm-fix-after
      `}
      style={{'--max-width': '20em'}}
    />
  )
}
