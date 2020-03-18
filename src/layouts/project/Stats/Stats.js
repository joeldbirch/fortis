import React from 'react'
import Divider from 'components/DividerHorizontal'
import { moduleRoot } from 'styles/helpers'

const Stats = ({
  disclaimer,
  items,
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
      <Divider />

      <ul
        className={`
          display:grid
          grid-template-columns:2
          @mq-widepalm--grid-template-columns:3
          @mq-lap--grid-template-columns:4
        `}
        style={{
        }}
      >
        {
          items.map(({label, value}, index) => (
            <li
              className={`
                padding-bottom:800
                @mq-palm--padding-bottom:columns-0-1/2
                padding-right:800
              `}
              key={index}
            >
              <h3
                className={`
                  font-size:300
                  @mq-bigdesk--font-size:em
                  font-weight:400
                `}
              >
                {label}
              </h3>
              <span
                className={`
                  color:neutral-800
                  font-size:700
                  @mq-bigdesk--font-size:750
                `}
              >
                {value}
              </span>
            </li>
          ))
        }
      </ul>

      {
        disclaimer && (
          <div
            className={`
              font-size:200
              @mq-desk--font-size:300
            `}
            dangerouslySetInnerHTML={{__html: disclaimer}}
          />
        )
      }
    </section>
  )
}

export default Stats
