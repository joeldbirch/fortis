import React from 'react'
import Divider from 'components/DividerHorizontal'
import NewsletterForm from 'components/NewsletterForm'
import { getCurrentYear } from 'utilities/helpers'

const styles = {
  root: `
    padding-horizontal:columns-0-1/2
  `,
}

export default ({ className=``, ...props }) => {
  className += styles.root
  return (
    <footer className={`
      ${ className }
    `} {...props}>
      <div
        className={`
          display:grid
          grid-template-columns:var-1
          @mq-palm--grid-template-columns:var-2
          @mq-desk--grid-template-columns:var-3
          grid-gap:columns-1
          @mq-palm--grid-gap:0
          font-size:300
          @mq-bigdesk--font-size:400
          position:relative
          padding-bottom:800
          padding-top:50
        `}
        style={{
          '--grid-template-columns-var-1': '5fr 6fr',
          '--grid-template-columns-var-2': '4fr 2fr 3fr 3fr',
          '--grid-template-columns-var-3': '4fr 2fr 2fr 2fr 2fr',
        }}
      >
        <Divider
          // override divider component's margin
          className={`
            @mq-palm--margin-horizontal:auto
            @mq-max-palm--margin-horizontal:auto
          `}
        />
        <h2 className={`
          visually-hidden
        `}>Quick contact details</h2>

        <NewsletterForm/>

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
              list-style:none
              padding:0
              margin:0
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
