import React from 'react'
import { forceFullWidth, container } from '../styles/helpers'
import Social from './Social'

const styles = {
  root: `
    background-color:green-400
    color:neutral-0
    padding:site-pad
  `,
}

export default ({ className, ...props }) => {
  className += styles.root
  return (
    <footer className={`
      ${ className }
      ${ styles.root }
      ${ forceFullWidth }
    `} {...props}>
      <div className={`
        padding-vertical:site-pad
        @mq-max-lap--text-align:center
        ${ container }
      `}>
        <h3 className={`
          font-size:400
          font-weight:500
          letter-spacing:20
          margin-top:0
          margin-bottom:600
          @mq-lap--margin-bottom:400
        `}>Fortis Development Group</h3>

        <div className={`
          @mq-lap--display:flex
          justify-content:space-between
        `}>
          <address className={`
          font-style:normal
          font-weight:300
          letter-spacing:10
          line-height:400
          margin-bottom:600
        `}>
          Sydney<br />
          Ground Floor<br />
          33&#8211;39 Riley Street<br />
          Woolloomooloo<br />
          NSW 2011
        </address>

        <address className={`
          font-style:normal
          font-weight:300
          letter-spacing:10
          line-height:400
          margin-bottom:600
        `}>
          Melbourne<br />
          Level 2<br />
          49&#8211;51 Stead Street<br />
          South Melbourne<br />
          VIC 3205
        </address>
        </div>

        <Social className={`
          padding-top:site-pad
        `} />

      </div>
    </footer>
  )
}
