const {playerPlugins, objectPlugins} = require('./plugins')

let props

let fps = 0
function updateFPS () {
  document.querySelector('#fps').innerText = `${fps} fps`
  fps = 0
}
window.setInterval(updateFPS, 1000)

function render () {
  props.ctx.clearRect(0, 0, props.width, props.height)

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

module.exports.loop = function loop (_props) {
  if (!props) {
    props = _props
  }
  window.requestAnimationFrame(loop)
  render()
}
