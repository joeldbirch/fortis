import React from 'react'

const path = `M0 44.5L44.7 0l8.5 8.5-30.4 29.8H100V51H22.8l30.4 29.6-8.5 8.7L0 44.5z`

const ArrowRounded = (props) => {
  return (
    <svg
      fill="currentColor"
      width="1em"
      height="1em"
      viewBox="0 0 100 89.2"
      {...props}
    >
      <path d={path} />
    </svg>
  )
}

export {path}

export default ArrowRounded
