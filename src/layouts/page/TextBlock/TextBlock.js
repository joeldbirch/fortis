import React from 'react'
import ScrollPrompt from 'components/ScrollPrompt'

const TextBlock = ({text, style={}, nextSection=null, id=null, ...props}) => {
  return (
    <section
      id={id}
      className={`
        @mq-desk--padding-horizontal:columns-1-1/2
        display:flex
        js-no-header-bg
        layout-text-block
        min-height:100vh-fixed
        padding-horizontal:columns-1-1/2
        padding-vertical:columns-2
        position:relative
        scroll-snap-align:start
        scroll-snap-stop:always
        width:100
      `}
    >
      <div
        className={`
          @mq-palm--font-size:600
          @mq-tiny--font-size:550
          can-style-note
          font-size:500
          margin:auto
          max-width:measure
          rhythm-fix-after
          rhythm-fix-before
          s-editable
        `}
        style={style}
        dangerouslySetInnerHTML={{__html: text}}
      />
      <ScrollPrompt to={nextSection} />
    </section>
  )
}

export default TextBlock
