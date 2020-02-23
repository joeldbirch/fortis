import React from 'react'
import { Link } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import FullWindowVideo from 'components/FullWindowVideo'
import ScrollPrompt from 'components/ScrollPrompt'
import { uiFontSize, forceFullWidth } from 'styles/helpers'
import { getPath } from 'utilities/helpers'

const Hero = ({image, label, linkTo, video, nextSection=null, id=null, className=``, ...props}) => {

  const to = linkTo && linkTo.link ? getPath(linkTo.link) : null
  const OptionalLink = to ? Link : `span`

  const newSrcSet = {
    srcSet: image.imageFileHero.childImageSharp.fluid.srcSet.split(`,`).splice(0, 4).join(`, `),
    srcSetWebp: image.imageFileHero.childImageSharp.fluid.srcSetWebp.split(`,`).splice(0, 4).join(`, `),
  }
  const fluid = image.imageFileHero.childImageSharp.fluid
  const newFluid = {
    ...fluid,
    ...newSrcSet,
  }
  console.table(newFluid);

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
          : <GatsbyImage
              fluid={{
                ...newFluid,
              }}
              className={`
                height:100vh-fixed
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
