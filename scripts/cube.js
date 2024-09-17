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
    Constant & Final Variables
*/
const keyDelayTime = 150;   // 150ms
const enableDebug = true;   // Only enable if you know what you're doing

const reallyBadLoadingScreenTips = [
    "Pro Tip: Hit the space bar to jump",
    "Hidden Feature: Pressing 'Z' will make you go faster",
    "Did you know? You can change your costume in the options menu",
    "Fun Fact: The original CubeDood was made in 2 weeks!",
    "Did you know? CubeDood is a cube",
    "Pro Tip: Avoid all spikes!",
    "Fun Fact: In the original CubeDood, level 15 was the hardest level in the game",
    "Pro Tip: Alt+F4 will enable cheats"
]

/*
    Variables
*/
var lastUpdateTime = performance.now();
var deltaTime = 0;
var fpsInterval = 1000 / cube.fps;

var keyDelay = false;

var gameState = "menu";
var menuState = "main";
var menuSelection = 0;

function update()
{
    requestAnimationFrame(update);

    var currentTime = performance.now();
    deltaTime += currentTime - lastUpdateTime;

    if (deltaTime >= fpsInterval)
    {
        graphics_clearCanvas();
        input();
        draw();
        deltaTime = 0;
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
                    graphics_drawText("black", "Main Menu", 605, 30, "30px", "Helvetica");
                    graphics_drawText("black", "Version: " + cube.version, 605, 60, "20px", "Helvetica");
                    graphics_drawText("black", "By Studio Cubed", 605, 90, "20px", "Helvetica");
                    switch (menuSelection)
                    {
                        case 0:
                            graphics_drawLayeredButton(300, 200, 200, 50, "Play", "black", "white", "orange");
                            graphics_drawLayeredButton(300, 280, 200, 50, "Editor", "orange", "black", "black");
                            graphics_drawLayeredButton(300, 360, 200, 50, "Options", "orange", "black", "black");
                            graphics_drawCubeDood(250, 210, 32, 32, "right");
                            break;
                        case 1:
                            graphics_drawLayeredButton(300, 200, 200, 50, "Play", "orange", "black", "black");
                            graphics_drawLayeredButton(300, 280, 200, 50, "Editor", "black", "white", "orange");
                            graphics_drawLayeredButton(300, 360, 200, 50, "Options", "orange", "black", "black");
                            graphics_drawCubeDood(250, 290, 32, 32, "right");
                            break;
                        case 2:
                            graphics_drawLayeredButton(300, 200, 200, 50, "Play", "orange", "black", "black");
                            graphics_drawLayeredButton(300, 280, 200, 50, "Editor", "orange", "black", "black");
                            graphics_drawLayeredButton(300, 360, 200, 50, "Options", "black", "white", "orange");
                            graphics_drawCubeDood(250, 370, 32, 32, "right");
                            break;
                    }
                    break;
            }
            break;
    }

    if (enableDebug)
    {
        graphics_drawText("purple", "FPS: " + Math.round(1 / (deltaTime / 1000)), 10, 20, "20px", "Helvetica");
        graphics_drawText("purple", "Delta Time: " + deltaTime, 10, 40, "20px", "Helvetica");
    }
}

function input()
{
    if (!keyDelay)
    {
        switch (gameState)
    {
        case "menu":
            switch (menuState)
            {
                case "main":
                    if (keys[38] && !keys[13])
                    {
                        if (menuSelection > 0)
                        {
                            menuSelection--;
                        } else {
                            menuSelection = 2;
                        }
                        utility_setKeyDelay();
                    }

                    if (keys[40] && !keys[13])
                    {
                        if (menuSelection < 2)
                        {
                            menuSelection++;
                        } else {
                            menuSelection = 0;
                        }
                        utility_setKeyDelay();
                    }
                    break;
            }
            break;
    }
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
    graphics_drawCubeDood(x + 440, y+68, 32, 32, "right");
    graphics_drawCubeTop(x + 504, y + 68, 32, 32, "left");
}

function graphics_drawButton(x, y, w, h, text, color, textColor, strokeColor)
{
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);

    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x, y, w, h);

    ctx.fillStyle = textColor;
    ctx.font = "20px Helvetica";
    ctx.fillText(text, x + (w / 2) - (text.length * 5), y + (h / 2) + 5);
}

function graphics_drawLayeredButton(x, y, w, h, text, color, textColor, strokeColor)
{
    ctx.fillStyle = "black";
    ctx.fillRect(x + 10, y + 10, w, h);

    ctx.fillStyle = "white";
    ctx.fillRect(x + 5, y + 5, w, h);

    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);

    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x, y, w, h);

    ctx.fillStyle = textColor;
    ctx.font = "20px Helvetica";
    ctx.fillText(text, x + (w / 2) - (text.length * 5), y + (h / 2) + 5);
}

function graphics_drawCubeDood(x, y, w, h, direction)
{
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, w, h);

    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, w, h);

    switch (direction) {
        case "right":
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(x + 12, y + 14, 2.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + 28, y + 14, 2.5, 0, 2 * Math.PI);
            ctx.fill();
            break;
        case "left":
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(x + 4, y + 14, 2.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + 20, y + 14, 2.5, 0, 2 * Math.PI);
            ctx.fill();
            break;
    }
}

function graphics_drawCubeTop(x, y, w, h, direction)
{
    // CubeTop is just CubeDood with a tophat, and different eyes

    ctx.fillStyle = "white";
    ctx.fillRect(x, y, w, h);

    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, w, h);

    switch (direction) {
        case "right":
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(x + 6, y + 14);
            ctx.lineTo(x + 10, y + 10);
            ctx.lineTo(x + 14, y + 14);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x + 22, y + 14);
            ctx.lineTo(x + 26, y + 10);
            ctx.lineTo(x + 30, y + 14);
            ctx.fill();
            break;
        case "left":
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(x + 2, y + 14);
            ctx.lineTo(x + 6, y + 10);
            ctx.lineTo(x + 10, y + 14);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x + 18, y + 14);
            ctx.lineTo(x + 22, y + 10);
            ctx.lineTo(x + 26, y + 14);
            ctx.fill();
            break;
    }

    ctx.fillStyle = "black";
    ctx.rect(x + 3, y - 5, 26, 5);
    ctx.fill();
    ctx.rect(x + 6, y - 30, 20, 25);
    ctx.fill();
    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.arc(x + 16, y - 5, 10, 0, Math.PI, true);
    ctx.fill();
    ctx.closePath();
}

function utility_setKeyDelay()
{
    keys = [];
    keyDelay = true;
    setTimeout(function()
    {
        keyDelay = false;
    }, keyDelayTime);
}

function init()
{
    canvas.width = cube.canWidth;
    canvas.height = cube.canHeight;

    console.log(cube.name + " v" + cube.version + " by " + cube.author);

    update();
}

init();