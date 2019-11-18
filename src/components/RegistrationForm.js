import React from 'react'
import { button } from '../styles/helpers'
import NetlifyForm from './NetlifyForm'
import FloatingLabelItem from './FloatingLabelItem'

const styles = {
  root: `
    font-size:400
  `,
  item: `
    margin-vertical:350
  `,
  input: `
    border-color:neutral-600
    border-radius-0 //iOS
    border-style:solid
    border-width:0
    @mq-desk:placeholder--font-size:400
    &:placeholder--font-size:300
  `,
}

const Field = ({ ...props }) => (
  <FloatingLabelItem
    {...props}
    className={styles.item}
    inputClassName={styles.input}
    labelClassName={styles.label}
    required
  />
)

export default ({className=``}) => (
  <NetlifyForm className={`
    ${className}
    ${styles.root}
  `} name="enquire">
    <Field label="First name" />
    <Field label="Last name" />
    <Field label="Phone" type="tel" />
    <Field label="Email" type="email" />
    <div>
      <button type="submit"
        className={`
          ${button}
        `}
        style={{
          paddingTop: `0.75rem`,
          paddingBottom: `0.75rem`,
        }}
      >
        Request Information
      </button>
    </div>
  </NetlifyForm>
)
