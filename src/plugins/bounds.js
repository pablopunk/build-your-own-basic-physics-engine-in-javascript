module.exports.init = (objs) => {}
module.exports.run = checkBounds

function checkBounds (obj, props) {
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
