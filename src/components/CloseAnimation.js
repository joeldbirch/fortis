import React from 'react'
import { centred, appleBezier } from '../styles/helpers'

const styles = {
  wrap: `
    close-wrapper
    ${centred}
  `,
  lines: `
    background-color:neutral-900
    display:block
    position:absolute
    z-index:100
  `,
}

const inlineStyles = {
  wrap: {
  },
  lines: {
    height: `100%`,
    transition: `transform 1s ${appleBezier}`,
    width: `2px`,
  }
}

const ClosedAnimation = ({closed=true, wrapStyles={}}) => {
  return (
    <span
      className={`
        ${styles.wrap}
      `}
      style={Object.assign(
        {},
        inlineStyles.wrap,
        {
          opacity: closed ? `1` : `0`,
          pointerEvents: closed ? `auto` : `none`,
        },
        wrapStyles,
      )}
    >
      <span className="visually-hidden">Close</span>
      <svg width="24px" height="24px" viewBox="0 0 24 24">
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
