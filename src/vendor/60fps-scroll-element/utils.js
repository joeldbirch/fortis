exports.support = (function support() {
  if (typeof document === 'undefined') return false
  var element = document.createElement('x')
  element.style.cssText = 'pointer-events:auto'
  return element.style.pointerEvents === 'auto'
})()

exports.dispatchClick = function(coords) {
  var event = document.createEvent('MouseEvent'),
    elem = document.elementFromPoint(coords.x, coords.y)

  event.initMouseEvent(
    'click',
    true /* bubble */,
    true /* cancelable */,
    window,
    null,
    coords.x,
    coords.y,
    0,
    0 /* coordinates */,
    false,
    false,
    false,
    false /* modifier keys */,
    0 /*left*/,
    null
  )
  event.synthetic = true

  elem.dispatchEvent(event)
}
