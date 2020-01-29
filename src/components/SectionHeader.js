import React from 'react'

export default ({children}) => {
  return (
    <header
      className={`
        padding-vertical:columns-0-1/2
        force-full-width
        position:absolute
        pos-top:0
      `}
    >
      <div
        className={`
          padding-left:columns-3-1/2
          padding-right:columns-1-1/2
          width:100
        `}
      >
        {children}
      </div>
    </header>
  )
}
