import React from 'react'
import { Link } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import FullWindowVideo from 'components/FullWindowVideo'
import ScrollPrompt from 'components/ScrollPrompt'
import { uiFontSize } from 'styles/helpers'
import { getPath } from 'utilities/helpers'

const Hero = ({image, label, linkTo, video, nextSection=null, id=null, className=``, ...props}) => {

  const fluid = image.imageFileHero.childImageSharp.fluid
  const to = linkTo && linkTo.link ? getPath(linkTo.link) : null
  const OptionalLink = to ? Link : `span`

  return (
    <section
      id={id}
      className={`
        ${className}
        width:100
        color:neutral-0
        js-contrast
        js-contrast--reverse
        min-height:100vh-fixed
        position:relative
        scroll-snap-align:start
        scroll-snap-stop:always
      `}
    >

        { label && (
          <header
            className={`
              height:100
              margin-horizontal:auto
              max-width:container
              padding-horizontal:columns-0-1/2
              padding-top:columns-0-1/2
              @mq-lap--padding-top:800
              pointer-events:none
              pos-left-right:0
              position:absolute
              z-index:100
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
                ${to && `
                    &:hover--text-decoration:none
                    pointer-events:auto
                    text-decoration:underline
                  `
                }
              `}>{label}</OptionalLink>
            </h2>
          </header>
        )
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
          : <GatsbyImage
              fluid={fluid}
              className={`
                height:100vh-fixed
              `}
            />
      }
      { nextSection && (
          <ScrollPrompt
            to={nextSection}
            className={`color:neutral-0`}
          />
        )
      }
    </section>
  )
}

export default Hero
