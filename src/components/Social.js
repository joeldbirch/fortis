import React from 'react'
import Instagram from '../images/inline/instagram.svg'
import Email from '../images/inline/email.svg'

const styles = {
  iconLink: `
    border-radius:1000
    border-style:solid
    border-width:200
    border-color:neutral-0
    padding:250
    display:inline-flex
    color:neutral-0
    &:hocus--color:green-400
    &:hocus--background-color:neutral-0
    transition-property:all
    transition-duration:150
    margin:200
  `,
}

export default ({className}) => (
  <nav className={`
    ${className}
    text-align:center
  `}>
    <a href="http://instagram.com/fortisdg" target="_blank" rel="noreferrer noopener" className={`
      ${ styles.iconLink }
    `}>
      <Instagram className={`
        display:block
        font-size:200
      `} />
    </a>
    <a href="mailto:hello@fortis.com.au" target="_blank" rel="noreferrer noopener" className={`
      ${ styles.iconLink }
    `}>
      <Email className={`
        display:block
        font-size:200
      `} />
    </a>
  </nav>
)
