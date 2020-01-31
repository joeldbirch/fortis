import React from 'react'
import NetlifyForm from 'components/NetlifyForm'
import ArrowRounded from 'components/ArrowRounded'

const styles = {
  root: `
    margin-right:100p
    @mq-palm--margin-right:250p
    @mq-desk--margin-right:0
    @mq-palm--padding-right:400
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

export default () => (
  <NetlifyForm className={styles.root} name="Fortis Newsletter 2020">
    <h3
      className={`
        font-size:em
        font-weight:400
        margin-top:600
      `}
    >
      <label htmlFor="emailSignup">
        Subscribe to our newsletter
      </label>
    </h3>
    <div
      className={`
        display:grid
        grid-template-columns:var-3
        align-items:flex-end
        @mq-palm--margin-right:columns-0-1/2
      `}
      style={{'--grid-template-columns-var-3': '1fr auto'}}
    >
      <input
        required
        id="emailSignup"
        type="email"
        placeholder="Email address"
        className={`
          padding-left:0
          padding-top:800
          padding-bottom:100
          font-size:400
          &:placeholder--font-size:300
          border-bottom-style:solid
          border-bottom-width:100
          border-bottom-color:neutral-600
          border-radius:0
          line-height:200
        `}
      />
      <button
        className={`
          @mq-max-palm--padding-left:800
          padding-right:0
          padding-top:800
          padding-bottom:100
          border-bottom-style:solid
          border-bottom-width:100
          border-bottom-color:neutral-600
          line-height:200
          color:neutral-500
          &:hocus--color:neutral-900
        `}
      >
        <span className="visually-hidden">Go</span>
        <ArrowRounded
          role="presentation"
          className={`
            rotate:180
            font-size:300
          `}
        />
      </button>
    </div>
  </NetlifyForm>
)