import React from 'react'
import { container } from '../styles/helpers'

const styles = {
  main: `
    display:flex
    flex-direction:column
    flex-grow:1
    flex-shrink:0
    padding-top:site-pad-200
    width:100
    ${container}
  `,
}

export default ({ children }) => <main className={styles.main}>{children}</main>
