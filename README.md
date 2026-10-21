# Adventure Game v2

Upgrade your Choose Your Own Adventure game so it keeps track of the player.

The `player` object at the top of `script.js` holds:

- `name`: starts as `"Anonymous Hero"`
- `health`: starts at `100`
- `inventory`: an array that starts empty

Each task below has a matching `TODO` comment in `script.js` that shows where it goes. Open the console (right-click, **Inspect**, **Console**) to check your work.

## Tasks

1. Use `prompt()` to ask the player's name and save it to `player.name`. If they click Cancel, keep `"Anonymous Hero"`.
2. Use `player.name` in at least two messages.
3. Make the locked door only open if `player.inventory` includes `"key"`.
4. Make the dragon cause damage by subtracting from `player.health`.
5. If `player.health` drops to `0` or below, alert "Game over".
6. Finish `showStats()` so it alerts the player's name, health, and inventory.
7. Add a new room of your own that pushes a new item into `player.inventory`.

## Bonus

- At the start of the game, reset `health` to `100` and `inventory` to empty, so a second play-through doesn't keep items from the first one.
- Add a room that heals the player, but not above `100`.
- Add a room that needs **two** items to get in.

## Reference

| Code                              | Does                                       |
| --------------------------------- | ------------------------------------------ |
| `prompt('Question?')`             | ask for text; Cancel gives back `null`     |
| `Number(prompt('Question?'))`     | turn the answer into a number              |
| `player.name = 'Ada';`            | change a property                          |
| `player.health -= 40;`            | subtract from a number property            |
| `player.inventory.push('key');`   | add an item to the inventory               |
| `player.inventory.includes('key')`| `true` or `false`                          |
