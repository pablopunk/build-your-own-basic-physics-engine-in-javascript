class Object {
  constructor (x, y, w, h) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h

    this.xSpeed = 0.1
    this.ySpeed = 0.1
  }

  speedX (s) {
    this.xSpeed += s
  }

  speedY (s) {
    this.ySpeed += s
  }

  delta () {
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
}

module.exports.Object = Object
