import React from 'react'
import { moduleRoot } from 'styles/helpers'
import NetlifyForm from 'components/NetlifyForm'
import FloatingLabelItem from 'components/FloatingLabelItem'
import LargeText from 'components/LargeText'

const styles = {
  item: `
    @mq-lap--margin-vertical:500
    margin-vertical:300
  `,
  input: `
    @mq-lap::placeholder--font-size:300
    @mq-max-lap--padding-top:600
    &::placeholder--font-size:200
    border-bottom-color:neutral-700
    &:focus--border-bottom-color:neutral-1000
    border-bottom-style:solid
    border-bottom-width:100
    border-radius:0
    font-size:400
    line-height:200
    padding-bottom:100
    padding-top:600
    padding-left:0
    outline:none
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
        margin-bottom:800
        @mq-palm--margin-bottom:columns-0-1/2
      `}
    >
      <div
        className={`
          padding-right:columns-1
          @mq-palm--padding-right:columns-2
        `}
      >

        <LargeText
          className={`
            margin-bottom:200
            @mq-palm--margin-bottom:600
          `}
          styles={{'--max-width': `none`}}
        >{`
          <p>${formIntroText}</p>
        `}</LargeText>
        <NetlifyForm name="project enquiry">
          <Field label="First name" />
          <Field label="Last name" />
          <Field label="Company" />
          <Field label="Email" type="email" />
          <Field label="Phone" type="tel" />
          <div>
            <input type="hidden" name="project" value={uri} />
            <div
              className={`
                padding-top:800
              `}
            ><button type="submit" className={`btn`}>
              Enquire
            </button></div>
          </div>
        </NetlifyForm>

      </div>
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
    labelStyles={{
      '--scale-x-var-1': `0.8`,
      '--scale-y-var-1': `0.8`,
      '--translate-x-var-1': `0`,
      '--translate-y-var-1': `0`,
      transformOrigin: `right`,
    }}
    required
  />
)