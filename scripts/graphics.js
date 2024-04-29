/*
    Graphics

    This JavaScript file is just full of utility functions that are used to draw things to the screen.
*/

var game_title = new Image();
game_title.src = 'assets/game/game_title_placeholder.png';

var goal = new Image();
goal.src = 'assets/level/goal.png';

var background = new Image();
background.src = 'assets/level/forest_background.png';

var jumpPad = new Image();
jumpPad.src = 'assets/level/bouncepad.png';

var superJumpPad = new Image();
superJumpPad.src = 'assets/level/super_bouncepad.png';

var tile_top = new Image();
tile_top.src = 'assets/level/top_middle.png';

var tile_top_left = new Image();
tile_top_left.src = 'assets/level/top_left.png';

var tile_top_right = new Image();
tile_top_right.src = 'assets/level/top_right.png';

var tile_middle = new Image();
tile_middle.src = 'assets/level/middle_middle.png';

var tile_middle_left = new Image();
tile_middle_left.src = 'assets/level/middle_left.png';

var tile_middle_right = new Image();
tile_middle_right.src = 'assets/level/middle_right.png';

var tile_bottom_left = new Image();
tile_bottom_left.src = 'assets/level/bottom_left.png';

var tile_bottom_right = new Image();
tile_bottom_right.src = 'assets/level/bottom_right.png';

var tile_bottom = new Image();
tile_bottom.src = 'assets/level/bottom_middle.png';

var small_spike = new Image();
small_spike.src = 'assets/level/small_spike.png';

var tall_spike = new Image();
tall_spike.src = 'assets/level/tall_spike.png';

/*
    drawBackground
    Draws a specific color to the background of the canvas.
*/
function drawBackground(color)
{
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBackgroundImage()
{
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

/*
    drawText
    Draws text to the screen.
*/
function drawText(text, x, y, size, color)
{
    ctx.font = size + 'px Arial';
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

/*
    createBlock
    Creates a block and places it in x*w, y*h spot.
*/
function createBlock(color, x, y, w, h)
{
    ctx.fillStyle = color;
    ctx.fillRect(x*w, y*h, w, h);
}

/*
    drawStartPos
    Draws a mini player at the start position
    This is essentially the coin but not rotated.
*/
function drawStartPos(x, y, w, h)
{
    ctx.fillStyle = 'white';
    ctx.fillRect(x*w + w/4, y*h + h/4, w/2, h/2);

    ctx.fillStyle = 'black';
    ctx.fillRect(x*w + w/8 + 8, y*h + h/8 + 8, 4, 4);
    ctx.fillRect(x*w + w/8 + 16, y*h + h/8 + 8, 4, 4);
}

/*
    drawImageToScreen
    Draws an image to the screen.
*/
function drawImageToScreen(image, x, y, w, h)
{
    ctx.drawImage(image, x, y, w, h);
}

/*
    createGoal
    Creates a goal object.
*/
function createGoal(x, y, w, h)
{
    ctx.drawImage(goal, x*w, y*h, w, h);
}

/*
    createCoin
    Creates a coin object. A smaller square rotated 45 degrees.
*/
function createCoin(x, y, w, h, color1, color2)
{
    ctx.fillStyle = color1;
    ctx.save();
    ctx.translate(x*w + w/2, y*h + h/2);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-w/4, -h/4, w/2, h/2);
    ctx.restore();

    // make this twice as small and white instead
    ctx.fillStyle = color2;
    ctx.save();
    ctx.translate(x*w + w/2, y*h + h/2);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-w/8, -h/8, w/4, h/4);
    ctx.restore();
}

/*
    drawDebug
    Draws the debug information to the screen.
*/
function drawDebug(elapsed)
{
    drawText("Delta: " + Math.round(deltaTime), 700, 30, 16, 'white');
    drawText("FPS: " + Math.round(1000 / elapsed), 700, 60, 16, 'white');
    drawText("X: " + Math.round(player.xPos), 700, 90, 16, 'white');
    drawText("Y: " + Math.round(player.yPos), 700, 120, 16, 'white');
    drawText("VelX: " + Math.round(player.xVelocity), 700, 150, 16, 'white');
    drawText("VelY: " + Math.round(player.yVelocity), 700, 180, 16, 'white');
    drawText("Level: " + currentLevel, 700, 210, 16, 'white');    
    drawText("Jumping: " + player.isJumping, 700, 240, 16, 'white');
    drawText("Grounded: " + player.isGrounded, 700, 270, 16, 'white');
}

/*
    drawUI
    Draws the UI to the screen.
    Modify this function as much as you want
*/
function drawUI()
{
    // Write scores and deaths at the top, with white text with a black border
    drawText("Score: " + player.score, 10, 30, 24, 'white');
    drawText("Deaths: " + player.deaths, 10, 60, 24, 'white');
}

/* 
    drawMenuPlayIcon
    Draws a arrow icon thats the player for the different menus.
*/
function drawMenuPlayerIcon(x, y, w, h) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x*w + w/4, y*h + h/4, w/2, h/2);

    ctx.fillStyle = 'black';
    ctx.fillRect(x*w + w/8 + 8, y*h + h/4 + 8, 8, 8);
    ctx.fillRect(x*w + w/8 + 24, y*h + h/4 + 8, 8, 8);
}

function drawForeground()
{

    // TODO: Move this function to graphics.js   
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/*
    drawLevel
    Takes a level as input and draws the blocks
*/
function drawLevel(level) {
    for (var i = 0; i < level.length; i++) {
        for (var j = 0; j < level[i].length; j++) {
            switch (level[i][j]) {
                case 1: // Goal
                    createGoal(j, i, 32, 32);
                    break;
                case 2: // Coin
                    createCoin(j, i, 32, 32, "yellow", "white");
                    break;
                case 3: // Start-Pos
                    drawStartPos(j, i, 32, 32);
                    break;
                case 4: // Tile (Top)
                    drawImageToScreen(tile_top, j*32, i*32, 32, 32);
                    break;
                case 5: // Tile (Top-Left)
                    drawImageToScreen(tile_top_left, j*32, i*32, 32, 32);
                    break;
                case 6: // Tile (Top-Right)
                    drawImageToScreen(tile_top_right, j*32, i*32, 32, 32);
                    break;
                case 7: // Tile (Middle)
                    drawImageToScreen(tile_middle, j*32, i*32, 32, 32);
                    break;
                case 8: // Tile (Middle-Left)
                    drawImageToScreen(tile_middle_left, j*32, i*32, 32, 32);
                    break;
                case 9: // Tile (Middle-Right)
                    drawImageToScreen(tile_middle_right, j*32, i*32, 32, 32);
                    break;
                case 10: // Tile (Bottom)
                    drawImageToScreen(tile_bottom, j*32, i*32, 32, 32);
                    break;
                case 11: // Tile (Bottom-Left)
                    drawImageToScreen(tile_bottom_left, j*32, i*32, 32, 32);
                    break;
                case 12: // Tile (Bottom-Right)
                    drawImageToScreen(tile_bottom_right, j*32, i*32, 32, 32);
                    break;
                case 13: // Jump Pad
                    ctx.drawImage(jumpPad, j*32, i*32, 32, 32);
                    break;
                case 14: // Super Jump Pad
                    ctx.drawImage(superJumpPad, j*32, i*32, 32, 32);
                    break;
                case 15: // Small Spike
                    ctx.drawImage(small_spike, j*32, i*32, 32, 32);
                    break;
                case 16: // Tall Spike
                    ctx.drawImage(tall_spike, j*32, i*32, 32, 32);
                    break;
                case 17: // Blue Teleporter
                    createBlock('blue', j, i, 32, 32);
                    break;
                case 18: // Red Teleporter
                    createBlock('red', j, i, 32, 32);
                    break;
                case 19: // Purple Teleporter
                    createBlock('purple', j, i, 32, 32);
                    break;
                case 20: // Orange
                    createBlock('orange', j, i, 32, 32);
                    break;
                case 21: // Green
                    createBlock('green', j, i, 32, 32);
                    break;
                case 22: // Yellow
                    createBlock('yellow', j, i, 32, 32);
                    break;
                case 23: // CubeDood OG Tile
                    createBlock('black', j, i, 32, 32);
                    break;
                case 24: // The "Work In Progress" Block
                    // Give this block a black outline
                    ctx.strokeStyle = 'black';
                    ctx.strokeRect(j*32, i*32, 32, 32);
                    break;
                case 25: // The "Intended Feature" Block
                    // Give this block a white outline
                    ctx.strokeStyle = 'white';
                    ctx.strokeRect(j*32, i*32, 32, 32);
                    break;
                case 26: 
                    // Draw the coin sprite, except its white
                    createCoin(j, i, 32, 32, "white", "black");
                    break;
            }
        }
    }
}

function drawLevelForeground(level)
{
    // Essentially just the same as drawLevel but with different objects and images.
    
}

/*
    drawStartScreen
    Draws the start screen. (A black screen that says press space to start)
*/
function drawStartScreen()
{
    drawBackground('black');
    drawText("Press Space to Start", canvas.width/2 - 100, canvas.height/2, 24, 'white');
}

/*
    drawMainMenu
    Draws the main menu.
*/
function drawMainMenu()
{
    drawBackground('orange');
    drawImageToScreen(game_title, canvas.width/2 - 400, 0, 450, 100);
    drawText("ReCubed", canvas.width/2 - 65, 115, 24, 'black')
    
    // Draw a button that says "Start"
    drawText("Start", canvas.width/2 - 375, 200, 24, 'black');
    // Put a rectangle around the button
    ctx.strokeStyle = 'black';
    ctx.strokeRect(canvas.width/2 - 400, 175, 150, 50);

    // Draw a button that says "Options"
    drawText("Options", canvas.width/2 - 375, 300, 24, 'black');
    // Put a rectangle around the button
    ctx.strokeStyle = 'black';
    ctx.strokeRect(canvas.width/2 - 400, 275, 150, 50);

    // Draw a button that says "Credits"
    drawText("Credits", canvas.width/2 - 375, 400, 24, 'black');
    // Put a rectangle around the button
    ctx.strokeStyle = 'black';
    ctx.strokeRect(canvas.width/2 - 400, 375, 150, 50);
}

/*
    drawMainMenuOptions
    Draws the options for the main menu.
*/
function drawMainMenuOptions(menuOption)
{
    switch (menuOption) {
        case "start":
            drawMenuPlayerIcon(2.2, 2.6, 64, 64);
            break;
        case "options":
            drawMenuPlayerIcon(2.2, 4.2, 64, 64);
            break;
        case "credits":
            drawMenuPlayerIcon(2.2, 5.8, 64, 64);
            break;
    }
}