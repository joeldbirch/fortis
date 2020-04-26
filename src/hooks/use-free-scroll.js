import {useState} from 'react'

export default () => {
  const [freeScroll, setFreeScroll] = useState(false)

  const init = function () {
    const sections = document.querySelectorAll(`.js-free-scroll`)

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.y < 0) {
          setFreeScroll(true)
        } else {
          setFreeScroll(false)
        }
      })
    })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }

  return [freeScroll, init]
}
