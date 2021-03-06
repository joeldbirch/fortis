import React from 'react'

const ScrollPromptAnimation = ({className = ``, children, to = null, ...props}) => {
  const ComponentTag = to ? `a` : `div`

  return (
    <ComponentTag
      href={to}
      onClick={(e) => {
        if (!to) return false
        e.preventDefault()
        const target = document.querySelector(`#${to.split(`#`)[1]}`)
        target.scrollIntoView({behavior: `smooth`})
      }}
      className={`
        ${className}
        ${to ? `cursor:pointer` : ``}
        animation-count:infinite
        animation-duration:1500
        animation-easing:ease-in-sine
        animation-name:pulse-down
      `}
      {...props}
    >
      {children}
    </ComponentTag>
  )
}

export default ScrollPromptAnimation
