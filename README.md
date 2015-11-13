# pong

Pong clone.  My first real game!

## Setup

    npm install

## Usage

  - `npm run build` to build all the assets
  - `npm run serve` to serve the game
  - Visit [http://localhost:3000](http://localhost:3000) to play the game

## Controls

  - `space` - pause/unpause the game (starts paused)
  - `w`/`s` - player one up/down
  - `up`/`down` - player two up/down

## Game modes

I built a pretty decent AI to make single-player mode actually fun.  In the [objects.json](https://github.com/flintinatux/pong/tree/master/client/data/objects.json) file, you'll notice a `"paddle"` labeled `"player": "one"`, and a `"computer"` labeled `"player": "two"`.  The paddle is human (you) and the computer is AI.  You can manually switch modes by editting the `objects.json` to change the type of either object.

  - **0-player** - computer vs. computer
  - **1-player** - paddle vs. computer
  - **2-player** - paddle vs. paddle

Yes, you will need to rebuild the assets whenever you reconfigure the game.  You can always just `npm run watch` instead if that gets annoying.

## What it does

Most of the inspiration for the architecture of this game came from [Game Programming Patterns](http://gameprogrammingpatterns.com/), which was as fun to read as it was to implement.  Some of the nifty tricks included in this game are:

  - Fixed-step game loop
  - Double-buffered object states
  - The update method
  - Game object components
  - Game-wide event aggregator
  - Prototypes for data modeling
  - AABB collision detection

## Next steps

The game currently renders with `div` elements, which is nice, because it makes it automatically responsive (ie, always fills the screen), and I can easily style it with `less`.  The result is not very performant, however, so the ball tends to blur a little as it moves.  I plan to switch to WebGL ([three.js](http://threejs.org/) maybe?) to sharpen up the graphics a bit.

Once that's done, I'd like to start adding features:

  - Setup a 1-player version on github pages
  - An actual win condition
  - Power-ups
  - Configurable tile-layer
  - Spatial partitioning for collision detection
  - Even more things
