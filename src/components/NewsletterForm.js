import React from 'react'
import NetlifyForm from 'components/NetlifyForm'
import ArrowRounded from 'components/ArrowRounded'

const styles = {
  root: `
    @mq-desk--margin-right:0
    @mq-lap--padding-right:400
    @mq-palm--margin-right:250p
    margin-right:100p
    padding-right:columns-0-1/2
  `,
}

export default ({ prependId=`field`, ...props }) => (
  <NetlifyForm className={styles.root} name="Fortis Newsletter 2020" {...props}>
    <h3
      className={`
        font-size:em
        font-weight:400
        margin-top:600
      `}
    >
      <label htmlFor={`${prependId}-emailSignup`}>
        Subscribe to our newsletter
      </label>
    </h3>
    <div
      className={`
        @mq-lap--margin-right:columns-0-1/2
        @mq-max-lap--margin-top:-px
        align-items:flex-end
        display:grid
        grid-template-columns:var-3
        max-width:small-column
      `}
      style={{
        '--grid-template-columns-var-3': `1fr auto`,
      }}
    >
      <input
        required={true}
        aria-required={true}
        aria-label="Enter your email address here"
        id={`${prependId}-emailSignup`}
        type="email"
        name="emailAddress"
        placeholder="Email address"
        minLength="3"
        size="40"
        className={`
          @mq-lap:placeholder--font-size:300
          @mq-max-lap--padding-top:600
          &::placeholder--font-size:200
          border-bottom-color:neutral-700
          border-bottom-style:solid
          border-bottom-width:100
          border-radius:0
          font-size:400
          line-height:200
          padding-bottom:100
          padding-left:0
          padding-top:800
        `}
      />
      <button
        type="submit"
        className={`
          @mq-max-lap--padding-top:600
          @mq-max-palm--padding-left:400
          &:hover--color:neutral-500
          border-bottom-color:neutral-700
          border-bottom-style:solid
          border-bottom-width:100
          line-height:200
          margin-horizontal:0
          padding-bottom:100
          padding-right:0
          padding-top:800
        `}
      >
        <span className="visually-hidden">Submit</span>
        <ArrowRounded
          role="presentation"
          className={`
            font-size:300
            rotate:180
          `}
        />
      </button>
    </div>
  </NetlifyForm>
)
