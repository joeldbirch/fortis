import React from 'react'

const HeadlightsLayout = ({
  className = ``,
  flipHorizontal = true,
  slotA = null,
  slotB = null,
  ...props
}) => {
  return (
    <div
      className={`
        @mq-desk--grid-gap:columns-2
        @mq-desk--grid-template-columns:var-2
        @mq-palm--grid-gap:columns-1
        @mq-palm--grid-template-columns:var-1
        display:grid
        grid-gap:800
        ${className}
      `}
      style={{
        '--grid-template-columns-var-1': `6fr 5fr`,
        '--grid-template-columns-var-2': `4fr 4fr`,
      }}
      {...props}
    >

      <div
        className={`
          ${flipHorizontal && `
            @mq-palm--grid-column:2
          `}
        `}
      >
        { slotA }
      </div>

      <div
        className={`
          ${flipHorizontal && `
            @mq-palm--grid-column:1
            @mq-palm--grid-row:1
          `}
        `}
      >
        { slotB }
      </div>

    </div>
  )
}

export default HeadlightsLayout
