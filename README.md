# Mario: Off Script game

You are a software developer creating a game. Create an HTML5 canvas game in a single html file as follows:
1. Draw a green strip of ground along the bottom of the screen then add a red square character standing on it. Let me move the character left and right using the arrow keys, and don't let it walk off the edges of the screen.
2. Add Gravity so my character falls downwards and  let me press the spacebar to make the character jump. Make sure the character lands back on the ground and doesn't fall through it or fly off the top of the screen.
3. Add 3 platforms at different heights that my character can jump onto. Then add one simple enemy an orange circle that moves left and right along the ground. If my character touches the enemy, show a "Game Over" message and a button to restart the game. Restart button should recreate the canvas.
after i click restart, the canvas should not get zoomed. Please fix it.
4. My character must be able to land on the brown platforms, when i make it jump, like it land on the ground. It should land on the brown platforms when i jump from right below it.
5. The character should jump onto the lowest platform first , then from there it could jump onto the second (middle) platform and from there to the topmost. It should not jump directly onto the third platform. My character should also be able to move left and right on the platforms.
6. Add 10 small yellow circle coins scattered randomly on the ground and platforms. When my character touches a coin, make it disappear and increase the score counter shown at the corner of the screen.
 Randomize coins on every restart of game.
7. Add a sparkle animation or sound effect when a coin is collected.
8. Add a golden flag at the right end of the level. When my character touches it, show a big "YOU WIN!" message with a play again button that restarts the whole game.
9. Also add a slight, low background sound effect when my character jumps.
10. Add faded grass or flowers on the green strip of land and add faded clouds above the screen which are constantly moving.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://game2dmario.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/63bf8840-b89c-42b1-9105-b0289597f9d0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
