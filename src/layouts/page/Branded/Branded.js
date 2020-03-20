import React from 'react'
import GatsbyImage from 'gatsby-image'
import FullWindowVideo from 'components/FullWindowVideo'
import BigBrand from 'components/BigBrand'
import ArrowDrawnUpLeft from 'components/ArrowDrawnUpLeft'

const styles = {
  root: `
    height:100vh-fixed
    position:relative
    scroll-snap-align:start
    width:100
  `,
  mediaWrap: `
    @mq-bigdesk--margin-horizontal:columns-2-1/2
    @mq-bigdesk--margin-horizontal:site-pad-500
    @mq-desk--margin-horizontal:columns-2
    @mq-palm--margin-horizontal:columns-1-1/2
    margin-horizontal:columns-1
    overflow:hidden
    position:relative
  `,
}

const Branded = ({image, text, video=null, nextSection=null, id=null, ...props}) => {
  console.log(image);

  return (
    <section
      className={` ${styles.root} `}
      id={id}
    >
      <GatsbyImage
        fluid={image.imageFile.childImageSharp.fluid}
        className={`
          height:100vh-fixed
          z-index:-1
          position:absolute
          pos-top-left:0
        `}
      />
      {
        video && (
          <FullWindowVideo
            vimeoId={video}
            windowHeight={true}
            className={`
              min-height:100vh-fixed
            `}
          />
        )
      }
      <BigBrand
        htmlText={text}
        textClasses={`
          @mq-max-palm--margin-top:100
          @mq-max-palm--text-align:left
          display:inline-block
        `}
        className={`
          @mq-lap--margin-top:-400
          flex-direction:column
          justify-content:flex-end
        `}
      >
        <ArrowDrawnUpLeft
          className={`
            @mq-bigdesk--margin-bottom:200
            @mq-palm--display:block
            @mq-palm--margin-bottom:100
            @mq-palm--margin-left:-400
            @mq-palm--transform:arrow-right-down
            transform:arrow-up-right
          `}
        />
      </BigBrand>
    </section>
  )
}

export default Branded
