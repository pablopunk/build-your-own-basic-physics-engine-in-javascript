const {playerPlugins, objectPlugins} = require('./plugins')

const props = {}

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
