import React from 'react'

export default ({className=``, absolute=`true`, children}) => {
  return (
    <header
      className={`
        ${className}
        ${absolute
          ? `position:absolute`
          : `position:relative`
        }
        padding-vertical:columns-0-1/2
        pos-top:0
      `}
    >
      <div
        className={`
          padding-horizontal:columns-0-1/2
          @mq-max-palm--text-align:center
          @mq-palm--padding-left:columns-3-1/2
          @mq-palm--padding-right:columns-1-1/2
          width:100
        `}
      >
        {children}
      </div>
    </header>
  )
}
