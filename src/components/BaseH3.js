import React from 'react'
import {
  bodyText,
} from '../styles/helpers'

const styles = {
  root: `${bodyText} font-weight:400`,
}

export default ({ className, children, ...props }) => {
  className += styles.root
  return (
    <h3 className={className} {...props}>{ children }</h3>
  )
}
