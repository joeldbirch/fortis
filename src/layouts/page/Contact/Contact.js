import React from 'react'
import NewsletterForm from 'components/NewsletterForm'
import FluidImage from 'components/FluidImage'
import BigBrand from 'components/BigBrand'
import ArrowDrawnUpLeft from 'components/ArrowDrawnUpLeft'
import useGlobalContent from 'hooks/use-global-content'
import { subhead } from 'styles/helpers'
import { cols, mq } from 'utilities/helpers'

const styles = {
  links: `
    text-decoration:none
    &:hover--text-decoration:underline
    color:inherit
  `
}

const Contact = () => {
  const {
    globalContent: {
      contactInformation: {
        socialMedia,
        teamImage,
        phone,
        email,
      },
    },
  } = useGlobalContent()

  return (
    <div
      className={`
        padding-bottom:400
        padding-horizontal:columns-0-1/2
        padding-top:site-top
        position:relative
        scroll-snap-align:start
        z-index:100
      `}
    >

      <div
        className={`
          @mq-desk--grid-template-columns:var-3
          @mq-desk--padding-horizontal:columns-1
          @mq-palm--display:grid
          @mq-palm--grid-template-columns:var-1
          @mq-palm--padding-bottom:columns-0-1/2
          @mq-widepalm--grid-gap:columns-1
          @mq-widepalm--grid-template-columns:var-2
          grid-gap:columns-0-1/2
          padding-bottom:400
        `}
        style={{
          '--grid-template-columns-var-1': `6fr 5.5fr`,
          '--grid-template-columns-var-2': `5fr 6fr`,
          '--grid-template-columns-var-3': `4fr 5fr`,
        }}
      >

        <FluidImage
          image={teamImage}
          className={`
            @mq-max-palm--width:columns-5-1/2
            @mq-max-palm--margin-left:400
            @mq-max-palm--margin-bottom:400
            float:right
            grid-column:2
            grid-row:1
          `}
          // extra col added to mq.palm size here because sides are cropped…
          sizes={`
            (min-width: ${mq.desk}) ${cols(5)}vw,
            (min-width: ${mq.palm}) ${cols(6)}vw,
            ${cols(5.5)}vw
          `}
        />

        <div
          className={`
            grid-row:1
            grid-column:1
            position:relative
            padding-right:columns-0-1/2
          `}
        >

          <div
            className={`
              ${subhead}
            `}
          >
            <h2
              className={`
                font-size:em
                font-weight:400
                margin-bottom:200
                rhythm-fix-before
              `}
            >Get in touch</h2>
            <p
              className={`
                @mq-max-palm--font-size:400
              `}
            >
              { !email ? ``
                : <span className={`position:relative`}>
                    <a className={`${styles.links}`} href={`mailto:${email}`} aria-label="Our email">{email}</a>
                    <span
                      className={`
                        @mq-desk--margin-right:columns-1
                        @mq-desk--pos-top:columns-0-1/4
                        @mq-palm--margin-left:400
                        @mq-palm--pos-left:100
                        @mq-palm--pos-top:columns-0-1/2
                        handwritten
                        margin-left:columns-2
                        margin-top:1000
                        pos-left:50
                        pos-top:columns-1
                        position:absolute
                        rotate:-2
                        width:small-caption
                      `}
                    >
                      <ArrowDrawnUpLeft
                        className={`
                          position:absolute
                          pos-bottom:100
                          margin-bottom:200
                        `}
                        style={{
                          transform: `scale(.7) rotate(10deg)`,
                        }}
                      />
                      Say hello
                    </span>
                    <br/>
                  </span>
              }
              <a className={`${styles.links}`} href={`tel:${phone}`} aria-label="Our phone number">{phone}</a>
            </p>


            { socialMedia.length < 1
              ? ``
              : <>
                  <h2
                    className={`
                      @mq-palm--margin-top:columns-0-1/2
                      font-size:em
                      font-weight:400
                      margin-bottom:200
                      margin-top:800
                      rhythm-fix-before
                    `}
                  >Follow us</h2>
                  <ul
                    className={`
                      @mq-max-palm--font-size:400
                    `}
                  >
                    {socialMedia.map(({name, url}, index) => (
                      <li key={index}><a className={`${styles.links}`} href={url}>{name}</a></li>
                    ))}
                  </ul>
                </>
            }
          </div>

          <NewsletterForm
            prependId="contact"
            className={`
              @mq-max-palm--max-width:small-column
              @mq-palm--margin-top:columns-0-1/2
              clear:both
              font-size:300
              margin-top:800
            `}
          />
        </div>

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
            @mq-max-palm--pos-top:200
            @mq-palm--padding-top:columns-0-1/2
            @mq-palm--display:block
            @mq-max-palm--position:absolute
            position:relative
          `}
        >
          Drop by for coffee
          <ArrowDrawnUpLeft
            className={`
              margin-top:200
              pos-left:50
              pos-top:100
              position:absolute
            `}
            style={{
              transform: `scaleY(-.8) rotate(60deg)`,
            }}
          />
        </span>
      </BigBrand>
    </div>
  )
}

export default Contact
