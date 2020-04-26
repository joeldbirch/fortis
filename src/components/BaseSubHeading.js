import React from 'react'
import {subhead} from '../styles/helpers'

const styles = {
  root: `
    ${subhead}
  `,
}

export default ({children, className = ``, ...props}) => {
  className += styles.root
  return (
    <h2 className={className} {...props}>
      {children}
    </h2>
  )
}
