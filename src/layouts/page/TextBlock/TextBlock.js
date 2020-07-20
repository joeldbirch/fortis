import React from 'react'
import ScrollPrompt from 'components/ScrollPrompt'

const textClasses = `
  @mq-palm--font-size:600
  @mq-tiny--font-size:550
  can-style-note
  font-size:500
  margin:auto
  max-width:measure
  rhythm-fix-after
  rhythm-fix-before
  s-editable
`

const TextBlock = ({
  text,
  style = {},
  nextSection = null,
  id = null,
  className = ``,
  children,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`
        @mq-desk--padding-horizontal:columns-1-1/2
        display:flex
        layout-text-block
        min-height:100vh-fixed
        padding-horizontal:columns-1-1/2
        padding-vertical:columns-2
        position:relative
        scroll-snap-align:start
        scroll-snap-stop:always
        width:100
        ${className}
      `}
    >
      {text ? (
        <div
          className={textClasses}
          style={style}
          dangerouslySetInnerHTML={{__html: text}}
        />
      ) : (
        <div className={textClasses} style={style}>
          {children}
        </div>
      )}

      {nextSection && <ScrollPrompt to={nextSection} />}
    </section>
  )
}

export default TextBlock
