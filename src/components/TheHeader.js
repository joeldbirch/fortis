import React from 'react'

const TheHeader = ({children}) => {
  return (
    <header
      className={`
        align-items:center
        display:flex
        justify-content:space-between
        padding:site-pad-100
        padding-bottom:0
        pos-left:0
        pos-top:0
        position:fixed
        width:100
        z-index:200
        pointer-events:none
      `}
    >
      {children}
    </header>
  )
}

export default TheHeader
