const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cube = {
    name: "CubeDood: ReCubed",
    author: "Colack",
    version: "0.0.1",
    fps: 60,

    canWidth: 800,
    canHeight: 640
}

var player = {
    x: 0,
    y: 0,
    w: 32,
    h: 32,
    costume: "cd",
    speed: 3,
    direction: "right"
}

var keys = [];

document.addEventListener("keydown", function(event)
{
    keys[event.keyCode] = true;
});

document.addEventListener("keyup", function(event)
{
    keys[event.keyCode] = false;
});

/*
    Images & Sprites
*/
var logo = new Image();
logo.src = "assets/game/logo.png";

/*
    Variables
*/
var lastUpdateTime = performance.now();
var deltaTime = 0;
var fpsInterval = 1000 / cube.fps;

var gameState = "menu";
var menuState = "main";

function update()
{
    requestAnimationFrame(update);

    var currentTime = performance.now();
    deltaTime += currentTime - lastUpdateTime;

    if (deltaTime >= fpsInterval)
    {
        deltaTime = 0;
        graphics_clearCanvas();
        input();
        draw();
    }

    lastUpdateTime = currentTime;
}

function draw()
{
    switch (gameState)
    {
        case "menu":
            graphics_drawMenuBackground();
            
            switch (menuState)
            {
                case "main":
                    graphics_drawGameLogo(10, 10);
                    break;
            }
            break;
    }
}

function input()
{
    switch (gameState)
    {
        case "menu":
            break;
    }
}

function graphics_clearCanvas()
{
    ctx.clearRect(0, 0, cube.canWidth, cube.canHeight);
}

function graphics_drawBackground(color)
{
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cube.canWidth, cube.canHeight);
}

function graphics_drawRect(color, x, y, w, h)
{
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function graphics_drawText(color, text, x, y, size, font)
{
    ctx.fillStyle = color;
    ctx.font = size + " " + font;
    ctx.fillText(text, x, y);
}

function graphics_drawLine(color, x1, y1, x2, y2)
{
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function graphics_drawRectOutline(color, x, y, w, h)
{
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, w, h);
}

function graphics_drawMenuBackground()
{
    graphics_drawBackground("black");
    graphics_drawRect("white", 0, 0, 780, 620);
    graphics_drawRect("orange", 0, 0, 760, 600);
}

function graphics_drawGameLogo(x, y)
{
    ctx.drawImage(logo, x, y);
    graphics_drawText("black", "ReCubed", x + 260, y + 135, "40px", "Helvetica");
}

function init()
{
    canvas.width = cube.canWidth;
    canvas.height = cube.canHeight;

    update();
}

init();