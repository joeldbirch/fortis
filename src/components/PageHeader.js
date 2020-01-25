import React from 'react'
import { uiFontSize } from '../styles/helpers'

const PageHeader = ({isMain=false, headingText=``}) => {

  const HeadingTag = isMain ? `h1` : `h2`

  return (
    <HeadingTag
      className={`
        ${uiFontSize}
      `}
      dangerouslySetInnerHTML={{
        __html: headingText
      }}
    />

  )
}

export default PageHeader
