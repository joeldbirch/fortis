import React from 'react'
import NewsletterForm from 'components/NewsletterForm'
import FluidImage from 'components/FluidImage'
import BigBrand from 'components/BigBrand'
import useGlobalContent from 'hooks/use-global-content'
import { subhead } from 'styles/helpers'

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
          // TODO: sizes
        />

        <div
          className={`
            grid-row:1
            grid-column:1
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
                : <><a className={`${styles.links}`} href={`mailto:${email}`} aria-label="Our email">{email}</a><br/></>
              }
              <a className={`${styles.links}`} href={`tel:${phone}`} aria-label="Our phone number">{phone}</a>
            </p>

            { socialMedia.length < 1
              ? ``
              : <>
                  <h2
                    className={`
                      font-size:em
                      font-weight:400
                      margin-bottom:200
                      margin-top:800
                      @mq-palm--margin-top:columns-0-1/2
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
              margin-top:800
              @mq-palm--margin-top:columns-0-1/2
              font-size:300
              clear:both
            `}
          />
        </div>

      </div>


      <BigBrand>Drop by for coffee</BigBrand>
    </div>
  )
}

export default Contact
