import React from 'react'
import ScrollPromptAnimation from 'components/ScrollPromptAnimation'
import ArrowDrawn from 'components/ArrowDrawn'

const ScrollPrompt = (props) => {
  return (
    <ScrollPromptAnimation
      className={`
        position:absolute
        pos-bottom:0
        pos-left:50
        padding:columns-0-1/2
      `}
    >
      <ArrowDrawn
        className={`
          color:contrast
          height:150r
        `}
      />
    </ScrollPromptAnimation>
  )
}

export default ScrollPrompt
