module.exports.init = (objs) => {}
module.exports.run = draw

const defaultColor = 'black'

function draw (obj, props) {
  props.ctx.fillStyle = obj.color
  props.ctx.fillRect(obj.x, obj.y, obj.width, obj.height)
  props.ctx.fillStyle = defaultColor
}
