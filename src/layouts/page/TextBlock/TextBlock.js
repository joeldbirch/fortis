import React from 'react'
import ScrollPrompt from 'components/ScrollPrompt'

const TextBlock = ({text, style={}, nextSection=null, id=null, ...props}) => {
  return (
    <section
      id={id}
      className={`
        js-no-header-bg
        layout-text-block
        padding-horizontal:columns-1-1/2
        @mq-desk--padding-horizontal:columns-1-1/2
        width:100
        padding-vertical:columns-2
        position:relative
        min-height:100vh-fixed
        display:flex
        scroll-snap-align:start
      `}
    >
      <div
        className={`
          font-size:500
          @mq-tiny--font-size:550
          @mq-palm--font-size:600
          margin:auto
          max-width:measure
          rhythm-fix-after
          rhythm-fix-before
          s-editable
          can-style-note
        `}
        style={style}
        dangerouslySetInnerHTML={{__html: text}}
      />
      <ScrollPrompt to={nextSection} />
    </section>
  )
}

export default TextBlock
