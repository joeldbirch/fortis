import React from 'react'
import GatsbyImage from 'gatsby-image'
import FullWindowVideo from 'components/FullWindowVideo'

const HeroFullScreenContent = ({fluid, video, className = ``, ...props}) => {
  if (!fluid) return ``

  return (
    <>
      <GatsbyImage
        fluid={fluid}
        className={`
          ${className}
          z-index:-1
        `}
      />
      {video && (
        <FullWindowVideo
          vimeoId={video}
          windowHeight={true}
          className={`
              min-height:100vh-fixed
            `}
        />
      )}
    </>
  )
}

export default HeroFullScreenContent
