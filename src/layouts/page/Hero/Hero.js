import React from 'react'
import { Link } from 'gatsby'
import HeroFullScreenContent from 'components/HeroFullScreenContent'
import ScrollPrompt from 'components/ScrollPrompt'
import { uiFontSize } from 'styles/helpers'
import { getPath } from 'utilities/helpers'

const Hero = ({
  className=``,
  forceTextColour=false,
  fullScreen=true,
  id=null,
  image,
  label,
  linkTo,
  nextSection=null,
  video,
  ...props
}) => {
  if (!image) return ``
  const fluid = image.imageFileHero.childImageSharp.fluid
  const to = linkTo && linkTo.link ? getPath(linkTo.link) : null
  const OptionalLink = to ? Link : `span`

  return (
    <section
      id={id}
      className={`
        ${className}
        ${forceTextColour ? `js-no-header-bg` : ``}
        ${!forceTextColour && fullScreen ? `js-contrast--reverse`: ``}
        ${fullScreen
          ? `
            js-contrast
            min-height:100vh-fixed
            scroll-snap-align:start
            scroll-snap-stop:always
          `
          : `
            @mq-bigdesk--padding-horizontal:columns-0-1/2
            margin-horizontal:auto
            max-width:container
          `
        }
        color:neutral-0
        position:relative
        width:100
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

      <HeroFullScreenContent
        className={`
          ${fullScreen ? `height:100vh-fixed` : ``}
        `}
        fluid={fluid}
        video={video}
      />

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
