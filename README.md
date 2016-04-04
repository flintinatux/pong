# pong

A pong clone.  Because there aren't enough of those.

## Demo

  [http://flintinatux.github.io/pong/](http://flintinatux.github.io/pong/)

## Controls

  - `space` - pause/unpause the game (starts immediately)
  - `w`/`s` - player one up/down

Player one (you) is blue, and the computer is red.

## What it does

The original architecture of this game came from [Game Programming Patterns](http://gameprogrammingpatterns.com/), which was as fun to read as it was to implement.  It included things like this:

  - Fixed-step game loop
  - Double-buffered object states
  - The update method
  - Game object components
  - Game-wide event aggregator
  - Prototypes for data modeling
  - AABB collision detection

However, I wanted to push a little further on the anything-can-be-anything idea, and try creating a separate game engine that supported [Component-Entity-Sytems](http://www.gamedev.net/page/resources/_/technical/game-programming/understanding-component-entity-systems-r3013).  The result was [Manic](https://github.com/flintinatux/manic), and I think I like how that turned out.

## Next steps

  - An actual win condition
  - Power-ups
  - Configurable tile-layer
  - Even more things
