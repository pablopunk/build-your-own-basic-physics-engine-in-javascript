# Physics engine in Javascript

> https://physics.now.sh

## Run

```sh
$ npm install   # install dependencies
$ npm run dev   # watch for files to change
$ npm start     # init server
$ npm run build # build for production (dist/ folder)
```

## Structure

```
+-- index.html            (the view)
+-- src/                  (the JS code)
|   +-- index.js          (the logic entry point)
|   +-- object.js         (the physical object model)
|   +-- plugins/          (extensible plugins for object behaviour)
|   |   +-- bounds.js     (make sure the objects are inside the frame)
|   |   +-- draw.js       (draw each object into the canvas)
|   |   +-- index.js      (export objectPlugins and playerPlugins)
|   |   +-- keys.js       (make WASD move the player)
|   |   +-- speedLimit.js (make sure objects don't get a fine)
|   +-- render.js         (the main loop)
```

## Plugins

Plugins contain the logic that happens to each object on each frame.

Let's say you wanna add **gravity** to this world. You can create a plugin inside `src/plugins/gravity.js` and then export it in `src/plugins/index.js`:

```js
export objectPlugins = [
  // ...
  require('./gravity')
]
```

A plugin looks like this:

### `init` function

It takes all world `objects` as an argument and also a `props` object containig the canvas context, the world object and the height/width: `{ ctx, world, w, h, ctx }`.

```js
// src/plugins/gravity.js
module.exports.init = (objects, props) => {
  // You can initialize here anything you want based on all objects and props
}
```

### `run` function

This is the logic that the plugin actually does. In this example, we can make things fall. It takes the object as an argument as well as the props.

```js
// src/plugins/gravity.js
const g = 0.1 // value of gravity on each render
module.exports.run = (object, props) => {
  object.speedY(g)
  // You should NOT check here if there's a collision with the ground.
  // Collisions should be a separate plugin
}
```


[*Inspired by*](https://www.graphitedigital.com/blog/build-your-own-basic-physics-engine-in-javascript)
