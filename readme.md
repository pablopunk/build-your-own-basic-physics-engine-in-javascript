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
+-- index.html           (the view)
+-- src/                 (the JS code)
|   +-- index.js         (the logic entry point)
|   +-- object.js        (the physical object model)
|   +-- plugins/         (extensible plugins for object behaviour)
|   |   +--bounds.js     (make sure the objects are inside the frame)
|   |   +--draw.js       (draw each object into the canvas)
|   |   +--index.js      (export objectPlugins and playerPlugins)
|   |   +--keys.js       (make WASD move the player)
|   |   +--speedLimit.js (make sure objects don't get a fine)
|   +-- render.js        (the main loop)
```


[*Inspired by*](https://www.graphitedigital.com/blog/build-your-own-basic-physics-engine-in-javascript)
