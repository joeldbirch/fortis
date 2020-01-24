import React from 'react'
import Divider from 'components/DividerHorizontal'
import { container } from 'styles/helpers'
import { getCurrentYear } from 'utilities/helpers'

const styles = {
  root: `
    padding-horizontal:columns-0-1/2
  `,
}

export default ({ className, ...props }) => {
  className += styles.root
  return (
    <footer className={`
      ${ className }
    `} {...props}>
      <div
        className={`
          ${ container }
          @mq-palm--display:grid
          grid-template-columns:2
          @mq-palm--grid-template-columns:var-2
          @mq-desk--grid-template-columns:var-3
          font-size:300
          @mq-bigdesk--font-size:400
          position:relative
          padding-bottom:800
          padding-top:50
        `}
        style={{
          '--grid-template-columns-var-2': '4fr 2.667fr 2.667fr 2.667fr',
          '--grid-template-columns-var-3': '4fr 2fr 2fr 2fr 2fr',
        }}
      >
        <Divider
          // override divider component's margin
          className={`
            max-width:container
            @mq-palm--margin-horizontal:auto
            @mq-max-palm--margin-horizontal:auto
          `}
        />
        <h2 className={`
          visually-hidden
        `}>Quick contact details</h2>

        <form
          className={`
            @mq-palm--padding-right:400
          `}
        >
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
              `}
            >Go</button>
          </div>
        </form>

        <div
          className={`
            padding-right:400
          `}
        >
          <h3
            className={`
              font-size:em
              font-weight:400
              margin-bottom:100
              margin-top:600
            `}
          >Follow us</h3>
          <ul
            className={`
              list-type:none
            `}
          >
            <li> <a href="https://instagram.com">Instagram</a> </li>
            <li> <a href="https://Facebook.com">Facebook</a> </li>
            <li> <a href="https://Linkedin.com">Linkedin</a> </li>
          </ul>
        </div>

        <address
          className={`
            padding-right:400
            font-style:normal
          `}
          role="contentinfo"
        >
          <h3
            className={`
              font-size:em
              font-weight:400
              margin-bottom:100
              margin-top:600
            `}
          >Sydney</h3>
          33&#8211;39 Riley&#160;Street<br />
          Woolloomooloo<br />
          NSW 2011
        </address>

        <address
          className={`
            padding-right:400
            font-style:normal
          `}
        >
          <h3
            className={`
              font-size:em
              font-weight:400
              margin-bottom:100
              margin-top:600
            `}
          >Melbourne</h3>
          L2 49&#8211;51 Stead&#160;Street<br />
          South Melbourne<br />
          VIC 3205
        </address>

        <div
          className={`
          `}
        >
          <p
            className={`
              margin-top:600
              @mq-desk--text-align:right
            `}
          >&copy; Fortis {getCurrentYear()}</p>
        </div>
      </div>
    </footer>
  )
}
