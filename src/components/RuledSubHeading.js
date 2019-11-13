import React from 'react'
import BaseSubHeading from './BaseSubHeading'

const styles = {
  root: `
    padding-top:500
    padding-bottom:300
    border-bottom-style:solid
    border-bottom-width:100
    border-bottom-color:neutral-200
  `,
}

export default ({ className=``, children, ...props }) => {
  className += styles.root
  return (
    <BaseSubHeading className={className} {...props}>
      { children }
    </BaseSubHeading>
  )
}
