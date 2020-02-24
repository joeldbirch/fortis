import React from 'react'

const styles = {
  main: `
    display:flex
    flex-direction:column
    flex-grow:1
    flex-shrink:0
    width:100
  `,
}

export default ({ children, className=``, ...props }) => (
  <main className={`${styles.main} ${className}`} {...props}>
    {children}
  </main>
)
