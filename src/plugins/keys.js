module.exports.init = (objs) => {
  window.addEventListener('keydown', event => onKeyDown(event.key, objs[0]))
  window.addEventListener('keyup', event => onKeyUp(event.key, objs[0]))
}

module.exports.run = (obj, props) => {
  actionKeys(obj)
}

const pressed = {}

function onKeyUp (key) {
  delete pressed[key]
}

function onKeyDown (key) {
  pressed[key] = true
}

function actionForKey (key, obj) {
  const step = 0.5
  switch (key.toLowerCase()) {
    case 'w':
    case 'arrowup':
      obj.speedY(-step)
      break
    case 'a':
    case 'arrowleft':
      obj.speedX(-step)
      break
    case 's':
    case 'arrowdown':
      obj.speedY(step)
      break
    case 'd':
    case 'arrowright':
      obj.speedX(step)
      break
  }
}

function actionKeys (obj) {
  for (const key in pressed) {
    actionForKey(key, obj)
  }
}
