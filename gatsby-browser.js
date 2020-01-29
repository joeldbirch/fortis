import fixOutline from 'fix-outline'
fixOutline()

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
const safariBody = document.querySelector(`.is-safari`)
if (safariBody) {
  safariBody.style.setProperty('--vh', `${vh}px`)
}
