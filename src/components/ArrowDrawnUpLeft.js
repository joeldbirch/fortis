import React from 'react'

const ArrowDrawnUpLeft = ({className = ``, ...props}) => {
  return (
    <svg
      width="28.8"
      height="29.5"
      viewBox="0 0 28.8 29.5"
      fill="currentColor"
      role="presentation"
      className={`
      ${className}
    `}
      {...props}
    >
      <path d="M5.9 5.8c-.3 1.3-.7 2.4-.9 3.5-.1.6-.3 1-.8 1.3-.5.3-1.1.1-1.2-.4C2.5 8 1 6.3.3 4.2c0-.1-.1-.2-.1-.3C-.3 2.5.1 2 1.7 2.3c.3.1.6.2.9.2 2 .4 2.4.1 3.2-1.6 0-.2.1-.5.2-.6.5-.4 1.5-.5 1.2.5-.1.7-.4 1.4-.7 2.2-.1.4-.2.9-.3 1.5 1 .5 2 .9 3.1 1.4 3.8 1.7 7 4.3 10.3 6.8 4.3 3.3 7.4 7.7 8.9 12.9.2.8.3 1.8.3 2.7 0 .6-.2 1.1-.8 1.1-.1-.1-.3-.2-.3-.3 0-3.9-1.6-7.3-3.7-10.5-1.6-2.4-3.8-4.3-6-6.1-2.3-1.5-4.5-3-6.7-4.5-1.6-1-3.4-1.8-5.4-2.2" />
    </svg>
  )
}

export default ArrowDrawnUpLeft
