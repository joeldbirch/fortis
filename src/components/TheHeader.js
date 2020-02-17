import React from 'react'

const TheHeader = ({children, className=``, ...props}) => {
  return (
    <header
      className={`
        ${className}
        align-items:center
        display:flex
        justify-content:space-between
        padding:columns-0-1/2
        padding-bottom:0
        pos-top:0
        position:fixed
        width:100
        z-index:400
        pointer-events:none
        max-width:container
      `}
      {...props}
    >
      {children}
    </header>
  )
}

export default TheHeader
