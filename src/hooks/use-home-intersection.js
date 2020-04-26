import { useState, useEffect, useRef } from 'react'

const useHomeIntersection = function () {
  const timesNotIntersecting = useRef(0)

  const [homePanel, setHomePanel] = useState({
    isIntersecting: false,
    hasChanged: false,
    shownCount: 0,
  })

  const init = function () {
    // must use classes instead of data because can't pass data props to gatsby-image
    const homePanelElement = document.querySelector(`.isFrontPage #section-0`)

    const intersectionConfig = {
      root: document.getElementById(`TheWrap`),
      // offset to make the test area similar to where header is, minus horizontal margin
      rootMargin: `-10px`,
      threshold: [0, 1],
    }

    const observer = new IntersectionObserver(((entries) => {
      entries.forEach((entry) => {
        if (!homePanel.isIntersecting && entry.isIntersecting) {
          timesNotIntersecting.current += 1
        }

        setHomePanel({
          isIntersecting: entry.isIntersecting,
          hasChanged: true,
          shownCount: timesNotIntersecting.current,
        })
      })
    }), intersectionConfig)

    homePanelElement && observer.observe(homePanelElement)

    return () => observer.disconnect()
  }

  useEffect(init, [timesNotIntersecting])
  return homePanel
}

export default useHomeIntersection
