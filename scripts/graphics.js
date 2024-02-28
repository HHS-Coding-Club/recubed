/*
    Graphics

    This JavaScript file is just full of utility functions that are used to draw things to the screen.
*/

/*
    drawBackground
    Draws a specific color to the background of the canvas.
*/
function drawBackground(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/*
    drawText
    Draws text to the screen.
*/
function drawText(text, x, y, size, color) {
    ctx.font = size + 'px Arial';
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

/*
    drawLevel
    Takes a level as input and draws the blocks
*/
function drawLevel(level) {
    for (var i = 0; i < level.length; i++) {
        for (var j = 0; j < level[i].length; j++) {
            switch (level[i][j]) {
                case 4:
                    ctx.fillStyle = "black";
                    ctx.fillRect(j * 32, i * 32, 32, 32);
                    break;
            }
        }
    }
}