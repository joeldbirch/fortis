import React from 'react'
import styles from './style.module.scss'

export default ({className = ``, children, ...props}) => {
  return (
    <div {...props} className={`${className} ${styles.wrap}`}>
      {children}
    </div>
  )
}
