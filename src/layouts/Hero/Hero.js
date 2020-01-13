import React from 'react'
import { Link } from 'gatsby'
import FluidImage from '../../components/FluidImage'
import FullWindowVideo from '../../components/FullWindowVideo'
import { uiFontSize } from '../../styles/helpers'
import { getPath } from '../../utilities/helpers'


const Hero = ({image, label, linkTo, video}) => {

  const to = linkTo && linkTo.link ? getPath(linkTo.link) : null
  const OptionalLink = to ? Link : `span`

  return (
    <section
      className={`
        position:relative
        min-height:100vh
        width:100vw
      `}
    >
      <header
        className={`
          padding-top:site-pad-100
          padding-horizontal:site-pad-100
          position:absolute
          pos-top-left:0
          width:100
          z-index:100
        `}
      >
        <h2
          className={`
            ${uiFontSize}
            margin-left:columns-3
            color:neutral-0
          `}
        >
          <OptionalLink to={to}>{label}</OptionalLink>
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
    </section>
  )
}

export default Hero
