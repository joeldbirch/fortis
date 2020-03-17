import React from 'react'
import FluidImage from './FluidImage'

const BaseLogo = ({
    logo,
    fallbackClasses=``,
    alt=``,
    aspectRatio=`25%`,
    className=`
      height:100
      width:100
      position:absolute
      object-fit:contain`,
    ...props
  }) => {
  const imageFile = logo && logo.imageFile

  switch (true) {
    case imageFile && imageFile.childImageSharp:
      return <ImageWrap aspectRatio={aspectRatio}><FluidImage image={logo} className={className} {...props} /></ImageWrap>

    case imageFile && imageFile.extension === 'svg':
      return <ImageWrap aspectRatio={aspectRatio}><img src={imageFile.publicURL} alt={alt} className={className} {...props} /></ImageWrap>

    default:
      return <p className={fallbackClasses}>{alt}</p>
  }
}

export default BaseLogo

const ImageWrap = ({children, aspectRatio}) => (
  <div
    style={{
      position: `relative`,
      paddingBottom: aspectRatio,
    }}
  >
    {children}
  </div>
)
