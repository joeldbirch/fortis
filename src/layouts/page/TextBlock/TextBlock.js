import React from 'react'
import ScrollPrompt from 'components/ScrollPrompt'

const TextBlock = ({text, style={}}) => {
  const inlineStyles = Object.assign(
    {},
    {'--rotate': '-1deg'},
    style
  )
  return (
    <section
      className={`
        padding-horizontal:columns-1-1/2
        @mq-desk--padding-horizontal:columns-1-1/2
        width:100
        padding-vertical:800
        position:relative
        min-height:100vh
        display:flex
        scroll-snap-align:start
      `}
    >
      <div
        className={`
          font-size:600
          margin:auto
          max-width:measure
          rhythm-fix-after
          rhythm-fix-before
          s-editable
          can-style-note
        `}
        style={inlineStyles}
        dangerouslySetInnerHTML={{__html: text}}
      />
      <ScrollPrompt />
    </section>
  )
}

export default TextBlock
