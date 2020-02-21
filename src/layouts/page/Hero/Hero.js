import React from 'react'
import { Link } from 'gatsby'
import FluidImage from 'components/FluidImage'
import FullWindowVideo from 'components/FullWindowVideo'
import ScrollPrompt from 'components/ScrollPrompt'
import { uiFontSize, forceFullWidth } from 'styles/helpers'
import { getPath } from 'utilities/helpers'

const Hero = ({image, label, linkTo, video, nextSection=null, id=null, className=``, ...props}) => {

  const to = linkTo && linkTo.link ? getPath(linkTo.link) : null
  const OptionalLink = to ? Link : `span`

  return (
    <section
      id={id}
      className={`
        ${className}
        ${forceFullWidth}
        js-contrast
        js-contrast--reverse
        color:neutral-0
        position:relative
        min-height:100vh-fixed
        scroll-snap-align:start
        scroll-margin-top:-px
      `}
    >

        { !label
          ? ``
          :
        <header
          className={`
            padding-top:columns-0-1/2
            padding-horizontal:columns-0-1/2
            position:absolute
            pos-left-right:0
            height:100
            z-index:100
            pointer-events:none
            max-width:container
            margin-horizontal:auto
          `}
          style={{
            '--color-contrast': 'white',
          }}
        >
          <h2
            className={`
              ${uiFontSize}
              @mq-max-palm--text-align:center
              @mq-palm--margin-left:columns-3
              color:neutral-900
            `}
          >
            <OptionalLink to={to} className={`
              &::before--hit-area-xy-0
              color:neutral-0
              ${to
                ? `
                  text-decoration:underline
                  &:hover--text-decoration:none
                  pointer-events:auto
                `
                : ``
              }
            `}>{label}</OptionalLink>
          </h2>
        </header>
      }
      {
        video
          ? <FullWindowVideo
              vimeoId={video}
              windowHeight={true}
              className={`
                min-height:100vh-fixed
              `}
            />
          : <FluidImage
              image={image}
              artDirection={`imageFileHero`}
              className={`
                height:100vh-fixed
              `}
              // ensure wider image than phone viewport as it crops heavily when portrait
              sizes={`
                (max-width: 800px) 800px
              `}
            />
      }
      { nextSection
        ? <ScrollPrompt
            to={nextSection}
            className={`color:neutral-0`}
          />
        : ``
      }
    </section>
  )
}

export default Hero
