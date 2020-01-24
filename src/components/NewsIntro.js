import React from 'react'
import LargeText from 'components/LargeText'

const NewsIntro = ({children, ...props}) => {

  return <LargeText {...props}>
    {children}
  </LargeText>
}

export default NewsIntro
