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