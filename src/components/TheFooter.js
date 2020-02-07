import React, { useEffect, useState } from 'react'
import Divider from 'components/DividerHorizontal'
import NewsletterForm from 'components/NewsletterForm'
import { getCurrentYear } from 'utilities/helpers'
import useGlobalContent from 'hooks/use-global-content'

const styles = {
  root: `
    padding-horizontal:columns-0-1/2
  `,
}

export default ({ className=``, ...props }) => {

  const [year, setYear] = useState(getCurrentYear())

  useEffect(function() {
    setYear(getCurrentYear())
  }, [])

  const {
    globalContent: {
      contactInformation: {
        socialMedia,
        officeLocations,
      },
    },
  } = useGlobalContent()

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
          @mq-max-lap--grid-gap:columns-0-1/2
          font-size:200
          @mq-lap--font-size:300
          @mq-bigdesk--font-size:400
          position:relative
          padding-bottom:800
          padding-top:50
        `}
        style={{
          '--grid-template-columns-var-1': '5.5fr 5.5fr',
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
            @mq-lap--padding-right:400
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
            { socialMedia.length > 0 && socialMedia.map(({name, url}, index) => (
              <li key={index}> <a href={url}>{name}</a> </li>
            ))}
          </ul>
        </div>

        { officeLocations.map((location, index) => <Address key={index} fields={location} />) }

        <div
          className={`
          `}
        >
          <p
            className={`
              margin-top:600
              @mq-desk--text-align:right
            `}
          >&copy; Fortis {year}</p>
        </div>
      </div>
    </footer>
  )
}


const Address = ({
  fields: {
    suburb,
    state,
    postcode,
    label,
    streetAddress,
  },
}) => (
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
    >{label}</h3>
    {streetAddress}<br />
    {suburb}<br />
    {state} {postcode}
  </address>
)
