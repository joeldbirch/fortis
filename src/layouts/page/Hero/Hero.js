import React from 'react'
import { Link } from 'gatsby'
import FluidImage from 'components/FluidImage'
import FullWindowVideo from 'components/FullWindowVideo'
import ScrollPrompt from 'components/ScrollPrompt'
import { uiFontSize } from 'styles/helpers'
import { getPath } from 'utilities/helpers'


const Hero = ({image, label, linkTo, video}) => {

  const to = linkTo && linkTo.link ? getPath(linkTo.link) : null
  const OptionalLink = to ? Link : `span`

  return (
    <section
      className={`
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
            underlined
            underlined--thin
            &:hover:after--opacity:0
          `}>{label}</OptionalLink>
        </h2>
      </header>

      {
        video
          ? <FullWindowVideo vimeoId={video}/>
          : <FluidImage
              image={image}
              className={`
                height:100vh
              `}
            />
      }
      <ScrollPrompt />
    </section>
  )
}

export default Hero
