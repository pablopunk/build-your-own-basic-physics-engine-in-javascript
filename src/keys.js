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
      obj.speedY(-step)
      break
    case 'a':
      obj.speedX(-step)
      break
    case 's':
      obj.speedY(step)
      break
    case 'd':
      obj.speedX(step)
      break
  }
}

function actionKeys (obj) {
  for (key in pressed) {
    actionForKey(key, obj)
  }
}

module.exports = { onKeyDown, onKeyUp, actionKeys }
