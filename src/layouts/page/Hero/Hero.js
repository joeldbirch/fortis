import React from 'react'
import { Link } from 'gatsby'
import FluidImage from 'components/FluidImage'
import FullWindowVideo from 'components/FullWindowVideo'
import ScrollPrompt from 'components/ScrollPrompt'
import { uiFontSize, shader } from 'styles/helpers'
import { getPath } from 'utilities/helpers'

const Hero = ({image, label, linkTo, video, className=``, ...props}) => {

  const to = linkTo && linkTo.link ? getPath(linkTo.link) : null
  const OptionalLink = to ? Link : `span`

  return (
    <section
      className={`
        ${className}
        js-contrast--reverse
        position:relative
        min-height:100vh-fixed
        width:100vw
        scroll-snap-align:start
        scroll-margin-top:-px
      `}
      style={{
        transition: 'min-height .25s .1s'
      }}
    >
      <header
        className={`
          padding-top:columns-0-1/2
          padding-horizontal:columns-0-1/2
          position:absolute
          pos-top-left:0
          width:100
          z-index:200
          pointer-events:none
        `}
        style={{
          '--color-contrast': 'white',
        }}
      >
        <h2
          className={`
            ${uiFontSize}
            margin-left:columns-4
            color:neutral-900
          `}
        >
          <OptionalLink to={to} className={`
            &:before--hit-area-xy-100
            color:neutral-0
            ${to
              ? `
                text-decoration:underline
                &:hover--text-decoration:none
                pointer-events:auto
                position:relative
              `
              : ``
            }
          `}>{label}</OptionalLink>
        </h2>
      </header>

      {
        video
          ? <FullWindowVideo
              vimeoId={video}
              className={`
                ${shader}
              `}
              data-reverse={true}
            />
          : <FluidImage
              image={image}
              artDirection={`imageFileHero`}
              className={`
                height:100vh
                ${shader}
              `}
            />
      }
      <ScrollPrompt className={`color:neutral-0`} />
    </section>
  )
}

export default Hero
