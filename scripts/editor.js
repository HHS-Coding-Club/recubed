/*
    Level Editor

    This is the level editor for CubeDood: ReCubed. It's probably the most advanced
    system in the game, and it's the most fun to use. Please don't break it.

    ReCubed's level editor is a 25x20 grid, with each block being 32x32 pixels. It
    is based off of CubeDood vs The World's level editor, (which never saw the light)
    and it's a lot more advanced than the original. There is a new system for saving
    and loading levels, and it's a lot more user-friendly.

    You use the arrow keys to move around the grid, and the keyboard to place blocks.
    Since there are a lot of blocks, we can no longer use the 1-9 keys to place blocks,
    so we use the 1-2 keys to go up and down the block list. This is a lot more user-friendly
    and it's a lot easier to use.

    Controls:
        - Arrow Keys: Move around the grid.
        - 1-2: Go up and down the block list.
        - E: Place a block.
        - R: Remove a block.
        - Shift - S: Save the level.
        - Shift - R: Reset the level.
        - Esc: Exit the level editor without saving.
        - Space: Playtest the level.

    
*/

const x = 25;
const y = 20;

var levelCanvas = [];

/*
    createLevelCanvas
    Creates a empty canvas with a 25x20 grid of 0's.
*/
function createLevelCanvas(array) {
    for (var i = 0; i < x; i++) {
        levelCanvas[i] = [];
        for (var j = 0; j < y; j++) {
            levelCanvas[i][j] = 0;
        }
    }
}

/*
    isValidLevel
    Checks if the level is valid by scanning the levelCanvas for any invalid blocks.
*/
function isValidLevel() {
    // TBD
}

/*
    saveLevel
    Saves the level to a file.
*/
function saveLevel() {
    // TBD
}

/*
    loadLevel
    Loads a level from a file.
*/
function loadLevel() {
    // TBD
}