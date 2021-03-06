import React from 'react'
import NewsletterForm from 'components/NewsletterForm'
import FluidImage from 'components/FluidImage'
import BigBrand from 'components/BigBrand'
import ArrowDrawnUpLeft from 'components/ArrowDrawnUpLeft'
import useGlobalContent from 'hooks/use-global-content'
import {cols, mq} from 'utilities/helpers'

const styles = {
  links: `
    &:hover--text-decoration:underline
    color:inherit
    text-decoration:none
  `,
}

const Contact = () => {
  const {
    globalContent: {
      contactInformation: {socialMedia, teamImage, phone, email},
    },
  } = useGlobalContent()

  return (
    <div
      className={`
      js-contrast
        margin-horizontal:auto
        max-width:container
        padding-bottom:400
        padding-horizontal:columns-0-1/2
        padding-top:site-top
        position:relative
        scroll-snap-align:start
        width:100
        z-index:100
      `}
    >
      <div
        className={`
          @mq-desk--grid-template-columns:var-3
          @mq-desk--padding-horizontal:columns-1
          @mq-palm--grid-template-columns:var-1
          @mq-palm--padding-bottom:columns-0-1/2
          @mq-widepalm--grid-gap:columns-1
          @mq-widepalm--grid-template-columns:var-2
          display:grid
          grid-gap:columns-0-1/2
          padding-bottom:400
        `}
        style={{
          '--grid-template-columns-var-1': `6fr 5.5fr`,
          '--grid-template-columns-var-2': `5fr 6fr`,
          '--grid-template-columns-var-3': `4fr 5fr`,
        }}
      >
        <div
          className={`
            grid-column:1
            grid-row:1
            padding-right:columns-0-1/2
            position:relative
          `}
        >
          <div
            className={`
              @mq-lap--font-size:500
              font-size:400
              font-weight:400
            `}
          >
            <h2
              className={`
                font-size:em
                font-weight:400
                margin-bottom:200
                rhythm-fix-before
              `}
            >
              Get in touch
            </h2>
            <p
              className={`
                @mq-max-palm--font-size:400
              `}
            >
              {email && (
                <span className={`position:relative`}>
                  <a
                    className={`${styles.links}`}
                    href={`mailto:${email}`}
                    aria-label="Our email"
                  >
                    {email}
                  </a>
                  <span
                    className={`
                        @mq-desk--margin-right:columns-1
                        @mq-desk--pos-top:columns-0-1/4
                        @mq-palm--margin-left:400
                        @mq-palm--pos-left:100
                        @mq-palm--pos-top:columns-0-1/2
                        font-family:cursive
                        font-size:550
                        letter-spacing:0
                        line-height:200
                        margin-left:columns-1
                        margin-top:1000
                        pos-left:100
                        pos-top:50
                        position:absolute
                        width:small-caption
                      `}
                  >
                    <ArrowDrawnUpLeft
                      className={`
                          margin-bottom:200
                          pos-bottom:100
                          position:absolute
                        `}
                      style={{
                        transform: `scale(.7) rotate(10deg)`,
                      }}
                    />
                    Say hello
                  </span>
                  <br />
                </span>
              )}
              <a
                className={`${styles.links}`}
                href={`tel:${phone}`}
                aria-label="Our phone number"
              >
                {phone}
              </a>
            </p>

            {socialMedia.length > 0 && (
              <>
                <h2
                  className={`
                      @mq-palm--margin-top:columns-0-1/2
                      font-size:em
                      font-weight:400
                      margin-bottom:200
                      margin-top:800
                      rhythm-fix-before
                    `}
                >
                  Follow us
                </h2>
                <ul
                  className={`
                      @mq-max-palm--font-size:400
                    `}
                >
                  {socialMedia.map(({name, url}, index) => (
                    <li key={index}>
                      <a className={`${styles.links}`} href={url}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <NewsletterForm
            prependId="contact"
            className={`
              @mq-max-palm--display:none
              @mq-palm--margin-top:columns-0-1/2
              clear:both
              font-size:300
              margin-top:800
            `}
          />
        </div>

        <FluidImage
          image={teamImage}
          className={`
              @mq-max-palm--margin-top:400
          `}
          // extra col added to mq.palm size here because sides are cropped…
          sizes={`
            (min-width: ${mq.desk}) ${cols(5)}vw,
            (min-width: ${mq.palm}) ${cols(6)}vw,
            ${cols(12)}vw
          `}
        />
      </div>

      <BigBrand
        className={`
          @mq-max-palm--margin-bottom:-columns-0-1/2
          display:flex
          flex-direction:column-reverse
          margin-top:200
        `}
      >
        <span
          className={`
            @mq-max-palm--margin-top:-1000
            @mq-max-palm--pos-right:0
            @mq-max-palm--pos-top:200
            @mq-max-palm--position:absolute
            @mq-palm--display:block
            @mq-palm--padding-top:columns-0-1/2
            position:relative
            z-index:100
          `}
        >
          Drop by for coffee
          <ArrowDrawnUpLeft
            className={`
              @mq-desk--transform:var-2
              margin-top:200
              pos-left:50
              pos-top:100
              position:absolute
              transform:var-1
            `}
            style={{
              '--rotate-var-1': `-90deg`,
              '--translate-y-var-1': `-1rem`,
              '--scale-y-var-2': `-0.8`,
              '--rotate-var-2': `60deg`,
            }}
          />
        </span>
      </BigBrand>
    </div>
  )
}

export default Contact
