import React, {useEffect} from 'react'
import HeroFullScreenContent from 'components/HeroFullScreenContent'
import useFirstIntersection from 'hooks/use-first-intersection'

const styles = {
  root: `
    js-contrast
    js-contrast--reverse
    min-height:100vh-fixed
    position:relative
    scroll-snap-align:start
    scroll-snap-stop:always
    width:100
  `,
  watermark: `
    @mq-desk--width:columns-7
    @mq-palm--flex-shrink:1
    @mq-palm--width:columns-9
    height:auto
    max-width:100
  `,
}

const Branded = ({image, video = null, id = null}) => {
  const [firstPanel, initFirstIntersection] = useFirstIntersection()

  useEffect(initFirstIntersection, [])

  return (
    <section className={` ${styles.root} `} id={id}>
      <HeroFullScreenContent
        className={`
          height:100vh-fixed
        `}
        fluid={image.imageFile.childImageSharp.fluid}
        video={video}
      />
      <div
        className={`
          position:absolute
          pos-left-right:0
          pos-bottom:0
          max-width:container
          margin-horizontal:auto
          padding-horizontal:columns-0-1/2
          padding-bottom:800
        `}
      >
        <img
          className={`
            ${styles.watermark}
            ${firstPanel.isIntersecting ? `opacity:100` : `opacity:0`}
            transition-property:opacity
            transition-duration:1000
            transition-delay:500
          `}
          src="/images/logo-fortis-watermark.svg"
          alt="Fortis"
          width="764"
          height="202"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Branded
