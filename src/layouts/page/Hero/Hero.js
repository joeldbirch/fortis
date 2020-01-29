import React from 'react'
import { Link } from 'gatsby'
import FluidImage from 'components/FluidImage'
import FullWindowVideo from 'components/FullWindowVideo'
import ScrollPrompt from 'components/ScrollPrompt'
import { uiFontSize, shader } from 'styles/helpers'
import { getPath } from 'utilities/helpers'

const Hero = ({image, label, linkTo, video, className, ...props}) => {

  const to = linkTo && linkTo.link ? getPath(linkTo.link) : null
  const OptionalLink = to ? Link : `span`

  return (
    <section
      className={`
        ${className}
        position:relative
        min-height:100vh
        width:100vw
        scroll-snap-align:start
      `}
    >
      <header
        className={`
          padding-top:columns-0-1/2
          padding-horizontal:columns-0-1/2
          position:absolute
          pos-top-left:0
          width:100
          z-index:100
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
            color:inherit
            ${to
              ? `
                text-decoration:underline
                &:hover--text-decoration:none
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
      <ScrollPrompt />
    </section>
  )
}

export default Hero
