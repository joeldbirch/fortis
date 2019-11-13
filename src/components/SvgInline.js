import React, { useState } from 'react'
import { fetchSvgInline } from '../utilities/helpers'

export default ({ alt='', src, ...props }) => {
  const [svg, setInlineSvg] = useState(null)

  const handleLoaded = async (e) => (
    setInlineSvg(await fetchSvgInline(e.currentTarget))
  )

  return svg
    ? <span {...props} dangerouslySetInnerHTML={{__html: svg}} />
    : <img {...props} src={src} alt={alt} onLoad={handleLoaded} lazyload="lazy" />
}
