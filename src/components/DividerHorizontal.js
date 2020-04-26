import React from 'react'

export default ({className=``, bottom, noMargin=false, ...props}) => {

  return (
    <div
      style={{
        marginTop: `-1px`,
      }}
      className={`
        ${className}
        ${noMargin
          ? ``
          : `margin-horizontal:columns-0-1/2`
        }
        border-top-color:neutral-700
        border-top-style:solid
        border-top-width:100
        pos-left-right:0
        position:absolute
        ${bottom ? `pos-bottom:0` : `pos-top:0` }
      `}
      { ...props }
    />
  )
}
