import React from 'react'

const ScrollPromptAnimation = ({className=``, children, ...props}) => {
  return (
    <div
      className={`
        ${className}
        animation-name:pulse-down
        animation-count:infinite
        animation-easing:ease-in-sine
        animation-duration:1500
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default ScrollPromptAnimation
