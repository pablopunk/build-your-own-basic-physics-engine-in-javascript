const {loop} = require('./render')
const {Body} = require('./body')
const {playerPlugins, objectPlugins} = require('./plugins')

const div = 1.5
const width = document.body.clientWidth / div
const height = document.body.clientHeight / div

// Player and world
const Player = new Body(100, 100, 20, 20, 'white')
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
const props = { ctx, world, width, height, canvas }

// Init plugins
playerPlugins.map(p => p.init([world.player], props))
objectPlugins.map(p => p.init(world.objects, props))

// Loop
loop(props)
