const {actionKeys} = require('./keys')

const props = {}

const speedLimit = 10
const defaultColor = 'black'
const playerColor = 'white'

function checkBounds (obj) {
  // Right
  if (obj.x - (obj.width / 2) > props.w) {
    obj.x = -obj.width / 2
  }

  // Left
  if (obj.x + (obj.width / 2) < 0) {
    obj.x = props.w + obj.width / 2
  }

  // Bottom
  if (obj.y - (obj.height / 2) > props.h) {
    obj.y = -obj.height / 2
  }

  // Top
  if (obj.y + (obj.height / 2) < 0) {
    obj.y = props.h + obj.height / 2
  }
}

function checkSpeedLimit (obj) {
  if (Math.abs(obj.xSpeed) > speedLimit) {
    obj.xSpeed = Math.sign(obj.xSpeed) * speedLimit
  }
  if (Math.abs(obj.ySpeed) > speedLimit) {
    obj.ySpeed = Math.sign(obj.ySpeed) * speedLimit
  }
}

function render () {
  props.ctx.clearRect(0, 0, props.w, props.h)

  const {player} = props.world
  props.ctx.fillStyle = playerColor
  props.ctx.fillRect(player.x, player.y, player.width, player.height)
  props.ctx.fillStyle = defaultColor
  checkBounds(player)
  checkSpeedLimit(player)
  actionKeys(player)
  player.delta()

  for (const o of props.world.objects) {
    props.ctx.fillRect(o.x, o.y, o.width, o.height)
    checkBounds(o)
    checkSpeedLimit(o)
    o.delta()
  }
}

module.exports.loop = function loop (ctx, world, w, h) {
  if (!props.ctx) {
    props.ctx = ctx
    props.world = world
    props.w = w
    props.h = h
  }
  window.requestAnimationFrame(loop)
  render()
}
