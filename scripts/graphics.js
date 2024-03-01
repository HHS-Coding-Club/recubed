/*
    Graphics

    This JavaScript file is just full of utility functions that are used to draw things to the screen.
*/

var flag = new Image();
flag.src = 'assets/game/flag.png';

/*
    drawBackground
    Draws a specific color to the background of the canvas.
*/
function drawBackground(color)
{
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
    createFlag
    Creates the goal flag for the end of the level.
*/
function createFlag(x, y, w, h)
{
    ctx.drawImage(flag, x*w, y*h, w, h);
}

/*
    createCoin
    Creates the coin sprite.
*/
function createCoin(x, y, w, h)
{
    ctx.fillStyle = 'yellow';
    // Create a square rotated 45 degrees that is centered on the x and y 
}

/*
    drawLevel
    Takes a level as input and draws the blocks
*/
function drawLevel(level) {
    for (var i = 0; i < level.length; i++) {
        for (var j = 0; j < level[i].length; j++) {
            switch (level[i][j]) {
                case 1:
                    createFlag(j, i, 32, 32);
                    break;
                case 4:
                    createBlock('black', j, i, 32, 32);
                    break;
                case 6:
                    createCoin(j, i, 32, 32);
                    break;
            }
        }
    }
}