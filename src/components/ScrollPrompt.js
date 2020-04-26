import React from 'react'
import ScrollPromptAnimation from 'components/ScrollPromptAnimation'
import ArrowRounded from 'components/ArrowRounded'

const ScrollPrompt = ({className=``, ...props}) => {
  return (
    <ScrollPromptAnimation
      className={`
        ${className}
        &:hover--opacity:50
        color:inherit
        padding:columns-0-1/4
        pos-bottom:0
        pos-left:50
        position:absolute
        z-index:200
      `}
      {...props}
    >
      <span className="visually-hidden">Scroll to next section</span>
      <ArrowRounded
        className={`
          @mq-desk--height:200r
          height:150r
          transform:var-1
        `}
        fill="currentColor"
        style={{
          '--rotate-var-1': `-90deg`,
        }}
      />
    </ScrollPromptAnimation>
  )
}

export default ScrollPrompt
