import React from 'react'

const TextBlock = ({text}) => {
  return (
    <section
      className={`
        padding-horizontal:columns-1-1/2
        @mq-desk--padding-horizontal:columns-1-1/2
        margin-horizontal:auto
        max-width:container
        width:100
        padding-vertical:800
        position:relative
        grid-guide
        min-height:100vh
        display:flex
      `}
    >
      <div
        className={`
          font-size:600
          margin:auto
          max-width:var
          rhythm-fix-after
          rhythm-fix-before
          s-editable
        `}
        style={{'--max-width': '40.5rem'}}
        dangerouslySetInnerHTML={{__html: text}}
      />
    </section>
  )
}

export default TextBlock
