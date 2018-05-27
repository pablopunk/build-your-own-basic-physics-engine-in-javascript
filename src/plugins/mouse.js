module.exports.init = (objs, props) => {
  window.addEventListener('mousedown', event => onMouseDown(getMousePos(event, props.canvas), objs[0]))
  window.addEventListener('touchstart', event => onMouseDown(getMousePos(event, props.canvas), objs[0]))
  window.addEventListener('mouseup', event => onMouseUp(getMousePos(event, props.canvas), objs[0]))
  window.addEventListener('touchend', event => onMouseUp())
}

module.exports.run = actionForMouse

const reduce = -1000
let move = {x: 0, y: 0}

function onMouseDown ({x, y}, obj) {
  move = {
    x: (obj.x - x) / reduce,
    y: (obj.y - y) / reduce
  }
}

function onMouseUp () {
  move = {x: 0, y: 0}
}

function actionForMouse (obj) {
  obj.speedX(move.x)
  obj.speedY(move.y)
}

function getMousePos (event, canvas) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX || event.touches[0].clientX
  const y = event.clientY || event.touches[0].clientY

  return {
    x: x - rect.left,
    y: y - rect.top
  }
}
