import React from 'react'

const headerStyles = {
  reversed: {
    transition: `background-color 0.5s 0s`,
    backgroundColor: `rgba(255, 255, 255, 0)`,
  },
}

const TheHeader = ({headerState, children, className=``, ...props}) => {
  return (
    <header
      className={`
        ${className}
        align-items:center
        display:flex
        justify-content:space-between
        padding:columns-0-1/2
        padding-bottom:0
        pos-top-left-right:0
        position:fixed
        width:100
        z-index:400
        pointer-events:none
        max-width:container
        margin-horizontal:auto
      `}
      {...props}
    >
      <div
        className={`
          faux-background
          margin-horizontal:-50vw
          pos-left-right:50
          width:100vw
          height:100
          position:absolute
        `}
        style={headerState.reversed ? headerStyles.reversed : {
          transition: headerState.applyBg ? `background-color 2s 1s` : `background-color 0s 0s` ,
          backgroundColor: headerState.applyBg ? `rgba(255, 255, 255, 1)`: `rgba(255, 255, 255, 0)`,
        }}
      />
      {children}
    </header>
  )
}

export default TheHeader
