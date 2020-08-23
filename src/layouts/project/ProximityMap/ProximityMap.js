import React, {useState} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Helmet} from 'react-helmet'
import FluidImage from 'components/FluidImage'
import Divider from 'components/DividerHorizontal'
import {subhead, navItem, navText, navHitarea} from 'styles/helpers'

const ProximityMap = ({heading, proximityView: proximities}) => {
  console.log({heading, proximities})
  const [shown, setShown] = useState([proximities[0]])

  const distanceLabels = proximities.map((proximity) => proximity.distanceLabel)
  return (
    <section>
      <Helmet>
        <style>{`

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: opacity 500ms;
}

.fade-height-enter {
  max-height: 0;
  opacity: 0;
}

.fade-height-enter-active {
  max-height: 12rem;
  opacity: 1;
  transition: all 500ms;
}

.fade-height-exit {
  max-height: 12rem;
  opacity: 1;
}

.fade-height-exit-active {
  max-height: 0;
  opacity: 0;
  transition: all 300ms;
}
        `}</style>
      </Helmet>
      <div
        className={`
          margin-vertical:columns-0-1/2
          @mq-max-palm--margin-vertical:800
          width:100
          display:grid
          grid-gap:0
          @mq-palm--grid-template-columns:var-2
          @mq-lap--grid-template-columns:var-3
          @mq-desk--grid-template-columns:var-3
          @mq-bigdesk--grid-template-columns:var-4
          max-width:container
          margin-horizontal:auto
          padding-horizontal:columns-0-1/2
        `}
        style={{
          '--scale-x-var-1': `1.75`,
          '--scale-y-var-1': `1.75`,
          '--scale-x-var-2': `1.25`,
          '--scale-y-var-2': `1.25`,
          '--grid-template-columns-var-2': `7fr 5fr`,
          '--grid-template-columns-var-3': `8fr 4fr`,
          '--grid-template-columns-var-4': `9fr 3fr`,
        }}
      >
        <div
          className={`
            position:relative
            padding-bottom:800
            @mq-palm--padding-bottom:columns-0-1/2
            @mq-palm--margin-left:columns-0-1/2
          `}
        >
          <Divider noMargin />
          <h2
            className={`
              ${subhead}
              margin-bottom:400
              rhythm-fix-after
              margin-top:400
              margin-bottom:800
              @mq-palm--margin-bottom:columns-0-1/2
            `}
          >
            {heading}
          </h2>

          <ul
            className={`
              margin-left:-200
              margin-bottom:400
              align-items:center
              display:flex
              flex-wrap:wrap
            `}
          >
            {distanceLabels.map((label, index) => (
              <li
                className={`
                  ${navItem}
                `}
                key={index}
              >
                <button
                  className={navHitarea}
                  onClick={(e) => {
                    e.preventDefault()
                    setShown([proximities[index]])
                  }}
                >
                  <span
                    className={`
                    line-height:400
                    ${navText}
                    ${
                      shown[0].distanceLabel === label
                        ? `custom-underline`
                        : `hover-underline`
                    }
                  `}
                  >
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {shown.map((proximity, index) => (
            <ol
              className={`
                    list-type:none
                    display:grid
                    grid-gap:200
                    @mq-desk--grid-gap:300
                  `}
              style={{
                '--grid-template-columns-var-1': `auto 1fr`,
              }}
            >
              {proximity.nearby.map(({amenity}, index) => (
                <li
                  className={`
                      display:grid
                      grid-template-columns:var-1
                      align-items:center
                      grid-gap:300
                      @mq-lap--grid-gap:400
                    `}
                >
                  <span
                    aria-hidden
                    className={`
                        marker
                        display:inline-flex
                        size:800
                        border-style:solid
                        border-color:inherit
                        border-width:100
                        border-radius:1000
                        align-items:center
                        justify-content:center
                      `}
                  >
                    <span
                      className={`
                          font-size:200
                          line-height:200
                        `}
                    >
                      {index + 1}
                    </span>
                  </span>
                  <span
                    className={`
                        font-size:300
                        @mq-lap--font-size:400
                      `}
                  >
                    {amenity}
                  </span>
                </li>
              ))}
            </ol>
          ))}
        </div>

        <div
          className={`
            @mq-bigdesk--margin-left:0
            @mq-palm--grid-column:1
            @mq-palm--grid-row:1
            @mq-palm--margin-left:-columns-0-1/2
            overflow:hidden
            position:relative
          `}
          style={{
            paddingBottom: `70%`,
          }}
        >
          <TransitionGroup>
            {shown.map((proximity, index) => (
              <CSSTransition
                timeout={500}
                classNames="fade"
                key={proximity.distanceLabel}
              >
                <FluidImage
                  image={proximity.mapImage}
                  className={`
                    @mq-bigdesk--transform:none
                    @mq-lap--transform:var-2
                    display:block
                    height:100
                    transform:var-1
                    width:100
                    position:absolute
                  `}
                  // ensure wider image than phone viewport as it crops heavily when portrait
                  sizes={`
                    (max-width: 1000px) 1000px
                  `}
                  style={{
                    position: `absolute`,
                  }}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </section>
  )
}

export default ProximityMap
