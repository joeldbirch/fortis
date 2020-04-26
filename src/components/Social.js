import React from 'react'
import Instagram from '../images/inline/instagram.svg'
import Email from '../images/inline/email.svg'

const styles = {
  iconLink: `
    &:hocus--background-color:neutral-0
    &:hocus--color:green-400
    border-color:neutral-0
    border-radius:1000
    border-style:solid
    border-width:200
    color:neutral-0
    display:inline-flex
    margin:200
    padding:250
    transition-duration:150
    transition-property:all
  `,
}

export default ({className}) => (
  <nav
    className={`
    ${className}
    text-align:center
  `}
  >
    <a
      href="http://instagram.com/fortisdg"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Instagram"
      className={`
      ${styles.iconLink}
    `}
    >
      <Instagram
        className={`
        display:block
        font-size:200
      `}
      />
    </a>
    <a
      href="mailto:hello@fortis.com.au"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Email us"
      className={`
      ${styles.iconLink}
    `}
    >
      <Email
        className={`
        display:block
        font-size:200
      `}
      />
    </a>
  </nav>
)
