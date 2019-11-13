import React from 'react'
import { button } from '../styles/helpers'
import NetlifyForm from './NetlifyForm'
import FloatingLabelItem from './FloatingLabelItem'

const styles = {
  root: `
    font-size:400
    margin-right:100p
    @mq-palm--margin-right:250p
    @mq-desk--margin-right:0
  `,
  item: `
    @mq-lap--margin-vertical:500
    margin-vertical:300
  `,
  input: `
    border-color:neutral-600
    border-radius-0 //iOS
    border-style:solid
    border-width:100
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

export default () => (
  <NetlifyForm className={styles.root} name="enquire">
    <Field label="First name" />
    <Field label="Last name" />
    <Field label="Phone" type="tel" />
    <Field label="Email" type="email" />
    <div>
      <button type="submit" className={button}>
        Send
      </button>
    </div>
  </NetlifyForm>
)
