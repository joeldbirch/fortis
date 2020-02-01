import React from 'react'
import FluidImage from 'components/FluidImage'
import FullWindowVideo from 'components/FullWindowVideo'
import BigBrand from 'components/BigBrand'
import Divider from 'components/DividerHorizontal'

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
    flex-basis:60
    flex-grow:1
    margin-horizontal:columns-0-1/2
    @mq-desk--margin-horizontal:columns-1-1/2
    @mq-bigdesk--margin-horizontal:site-pad-500
    overflow:hidden
    position:relative
  `,
}

const Branded = ({image, text, video=null, nextSection=null, id=null, ...props}) => {
  return (
    <section
      className={`
        ${styles.root}
      `}
      id={id}
    >
      <div
        className={`
          ${styles.mediaWrap}
        `}
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
      <BigBrand>{text}</BigBrand>
      <Divider bottom={true} />
    </section>
  )
}

export default Branded
