import React from 'react'

const ScrollPromptAnimation = ({className=``, children, to=null, ...props}) => {
  const ComponentTag = to ? `a` : `div`

  return (
    <ComponentTag
      href={to}
      onClick={(e) => {
        if (!to) return false
        e.preventDefault()
        const target = document.querySelector(`#${to.split('#')[1]}`)
        target.scrollIntoView({behavior:"smooth"})
      }}
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
    </ComponentTag>
  )
}

export default ScrollPromptAnimation
