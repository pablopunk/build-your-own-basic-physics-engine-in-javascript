const {playerPlugins, objectPlugins} = require('./plugins')

const props = {}

let fps = 0
function updateFPS () {
  document.querySelector('#fps').innerText = `${fps} fps`
  fps = 0
}
window.setInterval(updateFPS, 1000)

function render () {
  props.ctx.clearRect(0, 0, props.w, props.h)

  const {player} = props.world
  objectPlugins.map(p => p.run(player, props))
  playerPlugins.map(p => p.run(player, props))
  player.delta()

  for (const o of props.world.objects) {
    objectPlugins.map(p => p.run(o, props))
    o.delta()
  }

  fps++
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
