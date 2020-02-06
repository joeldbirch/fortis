import React from 'react'
import ScrollPromptAnimation from 'components/ScrollPromptAnimation'
import ArrowDrawn from 'components/ArrowDrawn'

const ScrollPrompt = ({className=``, ...props}) => {
  return (
    <ScrollPromptAnimation
      className={`
        ${className}
        color:inherit
        position:absolute
        pos-bottom:0
        pos-left:50
        padding:columns-0-1/4
        z-index:200
      `}
      {...props}
    >
      <ArrowDrawn
        className={`
          height:150r
          @mq-desk--height:200r
        `}
        fill="currentColor"
      />
    </ScrollPromptAnimation>
  )
}

export default ScrollPrompt
