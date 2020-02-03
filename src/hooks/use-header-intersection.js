import { useState, useEffect } from 'react'

const useHeaderIntersection = function() {

  const [headerReversed, setHeaderReversed] = useState(false)

  const init = function() {
    // must use classes instead of data because can't pass data props to gatsby-image
    const sections = document.querySelectorAll(`section:not(.js-contrast-ignore), .js-contrast`)

    const intersectionConfig = {
      // offset to make the test area similar to where header is, minus horizontal margin
      rootMargin: `-5.5% -3.846153846% -94.4% -3.846153846%`,
      threshold: 0,
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        const { target } = entry
        if (entry.isIntersecting) {
          const shouldReverse = target.classList.contains(`js-contrast--reverse`)
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
