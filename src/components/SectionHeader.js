import React from 'react'

export default ({className=``, absolute=`true`, children}) => {
  return (
    <header
      className={`
        ${className}
        ${
          absolute
          ? `position:absolute`
          : `position:relative`
        }
        margin-horizontal:auto
        max-width:container
        padding-vertical:columns-0-1/2
        pos-top-left:0
        width:100
      `}
    >
      <div
        className={`
          @mq-max-palm--text-align:center
          @mq-palm--padding-left:columns-3-1/2
          @mq-palm--padding-right:columns-1-1/2
          padding-horizontal:columns-0-1/2
          width:100
        `}
      >
        {children}
      </div>
    </header>
  )
}
