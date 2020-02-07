import React from 'react'
import Helmet from 'react-helmet'
import FluidImage from 'components/FluidImage'
import FullWindowVideo from 'components/FullWindowVideo'
import BigBrand from 'components/BigBrand'
import ArrowDrawnUpLeft from 'components/ArrowDrawnUpLeft'

const styles = {
  root: `
    height:100vh-fixed
    min-height:50vw
    display:flex
    flex-direction:column
    justify-content:space-between
    padding-horizontal:columns-0-1/2
    padding-top:site-top
    padding-bottom:400
    position:relative
    scroll-snap-align:start
  `,
  mediaWrap: `
    flex-grow:1
    margin-horizontal:columns-1
    @mq-palm--margin-horizontal:columns-1-1/2
    @mq-desk--margin-horizontal:columns-2
    @mq-bigdesk--margin-horizontal:columns-2-1/2
    @mq-max-palm--margin-top:600
    @mq-bigdesk--margin-horizontal:site-pad-500
    overflow:hidden
    position:relative
  `,
}

const Branded = ({image, text, video=null, nextSection=null, id=null, ...props}) => {
  return (
    <section className={` ${styles.root} `} id={id} >
      <Helmet>
        <style>{`
          .underlined--home::after {
            right: auto;
            left: -1rem;
            width: 5.5em;
            height: 2px;
            margin-top: 0;
            transform: rotate(3deg);
          }
        `}</style>
      </Helmet>
      <div className={` ${styles.mediaWrap} `}
        style={{
          minHeight: '10rem',
        }}
      >
        {
          video
            ? <FullWindowVideo vimeoId={video} minHeight="100%" height="56.25vmin" />
            : <FluidImage
                image={image}
                className={`
                  pos-left:0
                  pos-top:0
                  height:100
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
          display:inline-block
          @mq-max-palm--text-align:left
          @mq-max-palm--margin-top:100
          underlined
          underlined--home
        `}
        className={`
          @mq-palm--margin-top:-400
          flex-direction:column
          justify-content:flex-end
        `}
      >
        <ArrowDrawnUpLeft
          className={`
            transform:arrow-up-right
            @mq-palm--transform:arrow-right-down
            @mq-palm--display:block
            @mq-palm--margin-left:-400
            @mq-palm--margin-bottom:100
            @mq-bigdesk--margin-bottom:200
          `}
        />
      </BigBrand>
    </section>
  )
}

export default Branded
