import React from 'react'

export default ({className=``, bottom, ...props}) => {

  return (
    <div
      style={{
        marginTop: `-1px`
      }}
      className={`
        ${className}
        margin-horizontal:columns-0-1/2
        border-top-width:100
        border-top-style:solid
        border-top-color:neutral-600
        pos-left-right:0
        position:absolute
        ${bottom ? `pos-bottom:0` : `pos-top:0` }
      `}
      { ...props }
    />
  )
}
