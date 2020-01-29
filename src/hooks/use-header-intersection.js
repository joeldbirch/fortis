import { useState, useEffect } from 'react'

const useHeaderIntersection = function() {

  const [headerReversed, setHeaderReversed] = useState(false)

  const init = function() {
    const sections = document.querySelectorAll(`section, .isSection`)
    const intersectionConfig = {
      rootMargin: `0px`,
      threshold: [0, .1], // TODO: tweak intersection threshold
    }
    const header = document.getElementById(`SiteHeader`)

    const observer = new IntersectionObserver(function (entries, self) {
      entries.forEach(entry => {
        const { target } = entry
        if (entry.isIntersecting) {
          const {top, bottom} = target.getBoundingClientRect()
          const behindHeader = top < 16 && bottom > header.offsetHeight
          const shouldReverse = target.dataset.reverse === "true"
          // console.log({
          //   shouldReverse,
          //   behindHeader,
          //   target,
          //   reverse: target.dataset.reverse,
          //   sectionTop: top,
          //   sectionBottom: bottom,
          // });
          if (behindHeader) setHeaderReversed(shouldReverse)
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
