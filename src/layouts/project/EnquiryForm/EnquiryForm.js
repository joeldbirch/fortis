import React from 'react'
import {moduleRoot} from 'styles/helpers'
import NetlifyForm from 'components/NetlifyForm'
import LargeText from 'components/LargeText'
import Field from './Field'

export const styles = {
  item: `
    @mq-lap--margin-vertical:500
    margin-vertical:300
  `,
  input: `
    @mq-lap::placeholder--font-size:300
    @mq-max-lap--padding-top:600
    &::placeholder--font-size:200
    &:focus--border-bottom-color:neutral-1000
    &:hocus--outline:none
    border-width:0
    border-bottom-color:neutral-700
    border-bottom-style:solid
    border-bottom-width:100
    border-radius:0
    font-size:400
    line-height:400
    padding-bottom:0
    padding-left:0
    padding-top:600
  `,
}

const EnquiryForm = ({formIntroText, slug, children = null}) => {
  return (
    <section
      id="enquire"
      className={`
        ${moduleRoot}
        @mq-palm--margin-bottom:columns-0-1/2
        display:grid
        margin-bottom:800
        scroll-margin-top:site-top
      `}
    >
      <div
        className={`
          @mq-palm--padding-right:columns-2
          padding-right:columns-1
        `}
      >
        <LargeText
          className={`
            @mq-palm--margin-bottom:600
            margin-bottom:200
          `}
          styles={{'--max-width': `none`}}
        >{`
          <p>${formIntroText}</p>
        `}</LargeText>
        <NetlifyForm name="project enquiry">
          {children || (
            <>
              <Field label="First name" minLength="2" />
              <Field label="Last name" minLength="2" />
              <Field label="Company" />
              <Field label="Email" type="email" />
              <Field label="Phone" type="tel" />
            </>
          )}
          <div>
            <input type="hidden" name="project" value={slug} />
            <div
              className={`
                padding-top:800
              `}
            >
              <button type="submit" className={`btn`}>
                Enquire
              </button>
            </div>
          </div>
        </NetlifyForm>
      </div>
    </section>
  )
}

export default EnquiryForm

export {Field}
