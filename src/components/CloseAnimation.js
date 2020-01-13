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
    height: `1em`,
    width: `1em`,
  },
  lines: {
    height: `100%`,
    transition: `transform 1s ${appleBezier}`,
    width: `1px`,
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
          opacity: closed ? `1` : `0`
        },
        wrapStyles,
      )}
    >
      <span className="visually-hidden">Close</span>
      <span
        className={`
          close-left
          ${styles.lines}
        `}

        style={Object.assign(
          {},
          inlineStyles.lines,
          {
            left: `0`,
            transformOrigin: `0 100%`,
          },
          closed ? {transform: `skew(-45deg)`} : {}
        )}
      ></span>
      <span

        className={`
          close-right
          ${styles.lines}
        `}

        style={Object.assign(
          {},
          inlineStyles.lines,
          {
            right: `0`,
            transformOrigin: `100% 100%`,
          },
          closed ? {transform: `skew(45deg)`} : {}
        )}
      ></span>
    </span>
  )
}

export default ClosedAnimation
