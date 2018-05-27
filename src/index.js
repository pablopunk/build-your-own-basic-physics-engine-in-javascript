const {loop} = require('./render')
const {Object} = require('./object')
const {playerPlugins, objectPlugins} = require('./plugins')

const width = 600
const height = 500

// Player and world
const Player = new Object(100, 100, 20, 20, 'white')
const world = {
  objects: [],
  player: Player
}

// Setup canvas
const canvas = document.createElement('canvas')
canvas.id = 'canvas'
canvas.width = width
canvas.height = height
document.querySelector('main').appendChild(canvas)
const ctx = canvas.getContext('2d')

// Init plugins
playerPlugins.map(p => p.init([world.player]))
objectPlugins.map(p => p.init(world.objects))

// Loop
loop(ctx, world, width, height)
