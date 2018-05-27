module.exports.init = (objs) => {}
module.exports.run = checkSpeedLimit

const speedLimit = 10

function checkSpeedLimit (obj) {
  if (Math.abs(obj.xSpeed) > speedLimit) {
    obj.xSpeed = Math.sign(obj.xSpeed) * speedLimit
  }
  if (Math.abs(obj.ySpeed) > speedLimit) {
    obj.ySpeed = Math.sign(obj.ySpeed) * speedLimit
  }
}
