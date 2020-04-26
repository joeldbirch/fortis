import React from 'react'
import { uiFontSize } from '../styles/helpers'

const PageHeader = ({ isMain = false, headingText = ``, headingTag = `h2` }) => {
  const HeadingTag = isMain ? `h1` : headingTag

  return (
    <HeadingTag
      className={`
        ${uiFontSize}
        position:relative
        z-index:400
      `}
      dangerouslySetInnerHTML={{
        __html: headingText,
      }}
    />

  )
}

export default PageHeader
