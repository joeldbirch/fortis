import React from 'react'
import ScrollPromptAnimation from 'components/ScrollPromptAnimation'
import ArrowRounded from 'components/ArrowRounded'

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
        &:hover--color:neutral-500
      `}
      {...props}
    >
      <ArrowRounded
        className={`
          height:150r
          @mq-desk--height:200r
          transform:var-1
        `}
        fill="currentColor"
        style={{
          '--rotate-var-1': '-90deg',
        }}
      />
    </ScrollPromptAnimation>
  )
}

export default ScrollPrompt
