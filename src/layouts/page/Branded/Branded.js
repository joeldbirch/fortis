import React from 'react'
import FluidImage from 'components/FluidImage'
import FullWindowVideo from 'components/FullWindowVideo'
import BigBrand from 'components/BigBrand'
import ArrowDrawnUpLeft from 'components/ArrowDrawnUpLeft'

const styles = {
  root: `
    display:grid
    grid-template-columns:1
    grid-template-rows:var-1
    height:100vh-fixed
    margin-horizontal:auto
    max-width:container
    min-height:23r
    padding-bottom:400
    padding-horizontal:columns-0-1/2
    padding-top:site-top
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
  return (
    <section
      className={` ${styles.root} `}
      id={id}
      style={{
        '--grid-template-rows-var-1': `1fr auto`,
      }}
    >
      <div className={` ${styles.mediaWrap} `}
        style={{
          minHeight: '10rem',
        }}
      >
        {
          video
            ? <FullWindowVideo vimeoId={video} minHeight="56.25vmin" />
            : <FluidImage
                image={image}
                className={`
                  height:100
                  pos-left:0
                  pos-top:0
                  width:100
                `}
                style={{
                  position: `absolute`,
                }}
              />
        }
      </div>
      <BigBrand
        htmlText={text}
        textClasses={`
          @mq-max-palm--margin-top:100
          @mq-max-palm--text-align:left
          display:inline-block
        `}
        className={`
          @mq-palm--margin-top:-400
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
