/*
    Controls

    Controls for everything in the game. Here are the main controls:

    - Menus:
        - Arrow Keys: Move around the menu.
        - Enter: Select an option.
        - Esc: Go back to the previous menu.

    - Main Game:
        - Arrow Keys, WASD: Move around the world.
        - Space, W, Up Arrow: Jump.
        - Shift: Sprint
        - C: Sneak
        - E: Interact

    - Level Editor:
        - Arrow Keys: Move around the grid.
        - 1-2: Go up and down the block list.
        - E: Place a block.
        - R: Remove a block.
        - Shift - S: Save the level.
        - Shift - R: Reset the level.
        - Esc: Exit the level editor without saving.
        - Space: Playtest the level.

    - Multiplayer:
        - Player 1:
            - Arrow Keys - Move around the world.
            - Up Arrow - Jump.
        - Player 2:
            - WASD - Move around the world.
            - W - Jump.
*/

var keys = []; // Holds the keys that are currently being pressed in a boolean format.

document.addEventListener('keydown', function(event) {
    keys[event.keyCode] = true;
});

document.addEventListener('keyup', function(event) {
    keys[event.keyCode] = false;
});

// This is literally the whole system. Easy, right?