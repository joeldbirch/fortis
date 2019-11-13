import React from 'react'

export default ({ firstName, lastName, email, phone }) => (
  <address
    className="vcard font-style:normal
  font-size:300 @mq-desk--font-size:400"
  >
    <span className="fn n">
      <span className="given-name">{firstName}</span>{' '}
      <span className="family-name">{lastName}</span>
    </span>
    <br />
    <a
      href={`tel:${phone}`}
      className={`
        tel
        color:inherit
        &:hocus--color:orange-400
        &:hocus--text-decoration:underline
      `}
    >
      {phone}
    </a>
    <br />
    <span className="email">
      <a
        className={`
          email
          color:inherit
          &:hocus--color:orange-400
          &:hocus--text-decoration:underline
        `}
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </span>
  </address>
)
