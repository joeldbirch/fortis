import { useState, useEffect } from 'react'

const useHeaderIntersection = function() {

  const [headerReversed, setHeaderReversed] = useState(false)

  const init = function() {
    const sections = document.querySelectorAll(`section, .isSection`)
    const intersectionConfig = {
      // 90% offset bottom to make the test area similar to where header is
      rootMargin: `0px 0px -90% 0px`,
      threshold: 0,
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        const { target } = entry
        if (entry.isIntersecting) {
          const shouldReverse = target.dataset.reverse === "true"
          setHeaderReversed(shouldReverse)
        }
      })
    }, intersectionConfig)

    sections.forEach(section => observer.observe(section))
  }

  useEffect(init, [])

  return [
    headerReversed,
  ]

}

export default useHeaderIntersection
