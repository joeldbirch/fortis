import {useState} from 'react'
import {headerRootMargin as rootMargin} from '../utilities/helpers'

const useFirstIntersection = function () {
  const [firstPanel, setFirstPanel] = useState({
    isIntersecting: false,
  })

  const init = function () {
    // must use classes instead of data because can't pass data props to gatsby-image
    const anyFirstPanelElement = document.querySelector(`#section-0`)

    const intersectionConfig = {
      root: document.getElementById(`TheWrap`),
      // offset to make the test area similar to where header is, minus horizontal margin
      rootMargin,
      threshold: [0, 1],
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setFirstPanel({
          ...firstPanel,
          isIntersecting: entry.isIntersecting,
        })
      })
    }, intersectionConfig)

    anyFirstPanelElement && observer.observe(anyFirstPanelElement)

    return () => observer.disconnect()
  }

  return [firstPanel, init]
}

export default useFirstIntersection
