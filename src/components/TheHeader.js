import React from 'react'

const headerStyles = {
  reversed: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
  },
}

const TheHeader = ({
  headerState: {reversed, applyBg},
  children,
  className = ``,
  ...props
}) => (
  <header
    className={`
      ${className}
      align-items:center
      display:flex
      justify-content:space-between
      margin-horizontal:auto
      max-width:container
      padding-horizontal:columns-0-1/2
      padding-vertical:600
      @mq-lap--padding-vertical:800
      pointer-events:none
      pos-top-left-right:0
      position:fixed
      width:100
      z-index:400
    `}
    {...props}
  >
    <div
      className={`
        faux-background
        height:100
        margin-horizontal:-50vw
        pos-left-right:50
        position:absolute
        width:100vw
      `}
      style={
        reversed
          ? headerStyles.reversed
          : {
              backgroundColor: applyBg
                ? `rgba(255, 255, 255, 1)`
                : `rgba(255, 255, 255, 0)`,
              transition: `background-color 0.5s 0s`,
            }
      }
    />
    {children}
  </header>
)

export default TheHeader
