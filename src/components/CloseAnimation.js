import React from 'react'
import { centred } from '../styles/helpers'

const ClosedAnimation = ({closed=true, wrapStyles={}}) => {
  return (
    <span
      className={`
        close-wrapper
        ${centred}
      `}
      style={Object.assign(
        {},
        {
          opacity: closed ? `1` : `0`,
        },
        wrapStyles
      )}
    >
      <span className="visually-hidden">Close</span>
      <svg width="24px" height="24px" viewBox="0 0 24 24" className="size:400">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
            <g stroke="currentColor" strokeWidth="1.5">
                <g transform="translate(1.000000, 1.000000)">
                    <path d="M0.458333333,0.458333333 L21.5416667,21.5416667" />
                    <path d="M21.5416667,0.458333333 L0.458333333,21.5416667" />
                </g>
            </g>
        </g>
      </svg>
    </span>
  )
}

export default ClosedAnimation
