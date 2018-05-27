const {loop} = require('./render')
const {Object} = require('./object')
const {onKeyDown, onKeyUp} = require('./keys')

const width = 600
const height = 500

const Player = new Object(100, 100, 20, 20)
const world = {
  objects: [],
  player: Player
}

const canvas = document.createElement('canvas')
canvas.id = 'canvas'
canvas.width = width
canvas.height = height

document.querySelector('main').appendChild(canvas)

const ctx = canvas.getContext('2d')

loop(ctx, world, width, height)

window.addEventListener('keydown', event => onKeyDown(event.key, Player))
window.addEventListener('keyup', event => onKeyUp(event.key, Player))
