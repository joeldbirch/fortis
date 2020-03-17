import React from 'react'
import { moduleRoot } from 'styles/helpers'
import NetlifyForm from 'components/NetlifyForm'
import FloatingLabelItem from 'components/FloatingLabelItem'

const styles = {
  item: `
    @mq-lap--margin-vertical:500
    margin-vertical:300
  `,
  input: `
    border-color:neutral-600
    border-radius-0 //iOS
    border-style:solid
    border-width:100
    @mq-desk::placeholder--font-size:400
    &::placeholder--font-size:300
  `,
}

const EnquiryForm = ({
  formIntroText,
  uri,
}) => {

  return (
    <section
      className={`
        ${moduleRoot}
        display:grid
        margin-top:800
        @mq-palm--margin-top:columns-0-1/2
      `}
    >
      <p>{formIntroText}</p>
      <NetlifyForm name="project enquiry">
        <Field label="First name" />
        <Field label="Last name" />
        <Field label="Phone" type="tel" />
        <Field label="Email" type="email" />
        <div>
          <input type="hidden" name="project" value={uri} />
          <button type="submit" className={`btn`}>
            Send
          </button>
        </div>
      </NetlifyForm>
    </section>
  )
}

export default EnquiryForm


const Field = ({ ...props }) => (
  <FloatingLabelItem
    {...props}
    className={styles.item}
    inputClassName={styles.input}
    labelClassName={``}
    required
  />
)
