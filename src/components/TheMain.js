import React from 'react'
import { container } from '../styles/helpers'

const styles = {
  main: `
    @mq-bigdesk--margin-top:7rem
    display:flex
    flex-direction:column
    flex-grow:1
    flex-shrink:0
    margin-top:120p
    @mq-lap--margin-top:85p
    padding-top:600
    width:100
    ${container}
  `,
}

export default ({ children }) => <main className={styles.main}>{children}</main>
